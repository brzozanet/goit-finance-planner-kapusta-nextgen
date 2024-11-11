
import { updateBalance } from "../model/model.js";

export const updateUserBalance = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { newBalance } = req.body;

    if (!newBalance || isNaN(newBalance)) {
      return res.status(400).json({ error: "Invalid new balance" });
    }

    const showBalanceInfo = false;
    const updatedBalance = await updateBalance(
      userId,
      newBalance, 
      showBalanceInfo
    );
    res.status(200).json({ newBalance: updatedBalance });
  } catch (error) {
    if (error.message === "User not found") {
      return res.status(404).json({ error: "User not found" });
    }
    next(error);
  }
};