import DB_CONNECTION from "../database";
import { DataTypes } from "sequelize";

const RecordModel = DB_CONNECTION.define("record", {
  product: DataTypes.TEXT,
  price: DataTypes.INTEGER,
  qty: DataTypes.INTEGER,
  total: DataTypes.INTEGER,
  profit: DataTypes.INTEGER,
  transfer: DataTypes.TEXT,
  date: DataTypes.DATE,
});
(async () => {
  await DB_CONNECTION.sync({ force: false });
})();

export default RecordModel;
