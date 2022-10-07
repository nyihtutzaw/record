import RecordModel from "../models/record";
import { Op } from "sequelize";

class RecordController {
  async store(req, res) {
    try {
      let { product, price, qty, date, profit, transfer } = req.body;

      const he_activity = await RecordModel.create({
        product,
        price,
        qty,
        total: price * qty,
        profit,
        transfer,
        date,
      });

      return res.status(200).json({ data: he_activity });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error saving record" });
    }
  }
  async index(req, res) {
    try {
      const result = await RecordModel.findAll();
      return res.status(200).json({ data: result });
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: error });
    }
  }
  async each(req, res) {
    try {
      const result = await RecordModel.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!result) {
        return res.status(404).json({ message: "Record Not Found" });
      }

      return res.status(200).json({ data: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }
  async update(req, res) {
    try {
      const result = await RecordModel.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!result) {
        return res.status(404).json({ message: "Record Not Found" });
      }
      return res.status(200).json({ message: "Successfully Updated" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error" });
    }
  }
  async delete(req, res) {
    try {
      const result = await RecordModel.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!result) {
        return res.status(404).json({ message: "Record Not Found" });
      }
      return res.status(200).json({ message: "Successfully Deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error" });
    }
  }
}

export default new RecordController();
