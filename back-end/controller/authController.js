import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { User } from "../model/schema/user.js";

import {
  findUserByEmail,
  createUser,
  updateToken,
  getExpensesById,
} from "../model/model.js";

import Joi from "joi";

dotenv.config();

const SECRET_JWT = process.env.SECRET_JWT;

const schema = Joi.object({
  // password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  password: Joi.string().alphanum().min(5).max(30),
  email: Joi.string().email({ minDomainSegments: 2, multiple: true }),
});

//==================================================
const hashPassword = async (pwd) => {
  const saltRounds = 10;

  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(pwd, salt);

  return hash;
};

const validatePassword = (pwd, hash) => bcrypt.compare(pwd, hash);
//======================================================

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log({ email, password });

    const validateResult = schema.validate(req.body);
    if (validateResult.error || !req.body)
      return res.status(400).json({ message: validateResult.error.message });

    const user = await findUserByEmail(email);

    const isValidPassword = await validatePassword(password, user.password);
    if (!user || !isValidPassword)
      return res.status(401).json("Email or password is wrong");

    const payload = { id: user._id };
    const accessToken = jwt.sign(payload, SECRET_JWT);
    await updateToken(user._id, { accessToken });

    const transactions = await getExpensesById(user._id);

    const userData = {
      email: user.email,
      balance: user.balance,
      showBalanceInfo: user.showBalanceInfo,
      id: user._id,
      expenseCategories: user.expenseCategories,
      incomeCategories: user.incomeCategories,
      transactions,
    };

    res.status(200).json({ accessToken, userData });
  } catch (error) {
    next(error);
  }
};

export const addUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const validateResult = schema.validate(req.body);
    if (validateResult.error || !req.body)
      return res.status(400).json({ message: validateResult.error.message });

    const isEmailTaken = await findUserByEmail(email);
    if (isEmailTaken) return res.status(409).json("Email in use");

    const hashedPassword = await hashPassword(password);

    const result = await createUser({
      password: hashedPassword,
      email,
    });

    res.status(201).json({ email: result.email, id: result._id });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    const accessToken = null;
    await updateToken(req.user._id, { accessToken });
    return res.status(204).json({ message: "You have successful logout" });
  } catch (error) {
    next(error);
  }
};
