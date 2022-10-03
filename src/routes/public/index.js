import HeActivityController from "../../controllers/recordController";
import RecordController from "../../controllers/recordController";
import { Validate_Request } from "../../controllers";
import {
  Record_Create_Validation,
} from "../../validations";

export default (routes) => {
  routes.post(
    "/record",
    Record_Create_Validation,
    Validate_Request,
    RecordController.store
  );
  routes.get("/record", RecordController.index);
  routes.get("/record/:id", RecordController.each);
  routes.delete("/record/:id", RecordController.delete);
  routes.put("/record/:id", RecordController.update);
};
