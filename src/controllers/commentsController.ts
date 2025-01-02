import commentModel, { CommentDocument } from "../models/commentModel";
import { Request, Response } from "express";
import BaseController from "./baseController";

const commentsController = new BaseController<CommentDocument>(commentModel);


export default commentsController