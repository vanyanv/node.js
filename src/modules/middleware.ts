import { validationResult } from 'express-validator';

export const handleInputErrors = (req, res, next) => {
  //to get the validation results
  const errors = validationResult(req);
  //check to see for errors
  if (!errors.isEmpty()) {
    res.status(400);
    //sending back json with a array of errors
    res.json({ errors: errors.array() });
  } else {
    next();
  }
};
