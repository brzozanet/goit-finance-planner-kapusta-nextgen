import dotenv from "dotenv";
import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "./model/schema/user.js";

dotenv.config();
const SECRET_JWT = process.env.SECRET_JWT; 

const strategyOptions = {
  secretOrKey: SECRET_JWT,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(
  new Strategy(strategyOptions, (payload, done) => {
    User.findOne({ _id: payload.id })
      .then((user) =>
        !user ? done(new Error("User not existing")) : done(null, user)
      )
      .catch(done);
  })
);

export const auth = (req, res, next) => {
  passport.authenticate("jwt", {session: false}, async(error, user) => {
    if(!user || error || !user.accessToken ) {
      console.log({user, error});
      return res.status(401).json({message: "Not authorized"})
    }
    req.user = user;
    next(error);
  })(req, res, next)
};
