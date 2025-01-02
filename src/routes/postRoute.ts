import express from "express";
const router = express.Router();
import postsController from "../controllers/postsController";
import { authMiddleware } from "../controllers/authController";

router.get("/", postsController.getAll.bind(postsController));

router.get("/:id", postsController.getById.bind(postsController));

router.post("/", authMiddleware, postsController.create.bind(postsController));

router.put("/:id", authMiddleware, postsController.update.bind(postsController));

router.delete("/:id", authMiddleware, postsController.delete.bind(postsController));

export default router;