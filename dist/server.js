"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
//import postsRoute from "./routes/posts_route";
//import commentsRoute from "./routes/comments_route";
//import authRoutes from "./routes/auth_route";
//import swaggerJsDoc from "swagger-jsdoc";
//import swaggerUI from "swagger-ui-express";
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
//app.use("/posts", postsRoute);
//app.use("/comments", commentsRoute);
//app.use("/auth", authRoutes);
const db = mongoose_1.default.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));
const initApp = () => {
    return new Promise((resolve, reject) => {
        if (!process.env.DB_CONNECT) {
            reject("DB_CONNECT is not defined in .env file");
        }
        else {
            mongoose_1.default
                .connect(process.env.DB_CONNECT)
                .then(() => {
                resolve(app);
            })
                .catch((error) => {
                reject(error);
            });
        }
    });
};
exports.default = initApp;
//# sourceMappingURL=server.js.map