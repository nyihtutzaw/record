import { body, check, oneOf } from "express-validator";


export const Record_Create_Validation = [
  body("product").isLength(1),
  body("price").isLength(1),
  body("qty").isLength(1),
  body("total").isLength(1),
  body("profit").isLength(1),
  body("transfer").isLength(1),
];