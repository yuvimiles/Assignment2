// src/controllers/baseController.ts
import { Request, Response } from "express";
import { Model } from "mongoose";

export class BaseController<T> {
    protected model: Model<T>;
    constructor(model: Model<T>) {
        this.model = model;
        }

  // GET all items
  async getAll (req: Request, res: Response) {
    try {
      const items = await this.model.find();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  

  // GET item by ID
  async getById (req: Request, res: Response) {
    try {
      const id = req.params.id;
      const item = await this.model.findById(id);

      if (!item) {
        res.status(404).json({ error: "Item not found" });
        return;
      }

      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // CREATE new item
  async create (req: Request, res: Response) {
    try {
      const newItem = new this.model(req.body);
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // UPDATE item by ID
  async update (req: Request, res: Response){
    try {
      const id = req.params.id;
      const updatedItem = await this.model.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!updatedItem) {
        res.status(404).json({ error: "Item not found" });
        return;
      }

      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // DELETE item by ID
  async delete (req: Request, res: Response){
    try {
      const id = req.params.id;
      const deletedItem = await this.model.findByIdAndDelete(id);

      if (!deletedItem) {
        res.status(404).json({ error: "Item not found" });
        return;
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

}
export default BaseController;