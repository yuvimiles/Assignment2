import express from "express";
const router = express.Router();
import commentsController from "../controllers/commentsController";
import { authMiddleware } from "../controllers/authController";

router.get("/", commentsController.getAll.bind(commentsController));

router.get("/:id", commentsController.getById.bind(commentsController));

router.post("/", authMiddleware, commentsController.create.bind(commentsController));

router.delete("/:id", authMiddleware, commentsController.delete.bind(commentsController));

export default router;
