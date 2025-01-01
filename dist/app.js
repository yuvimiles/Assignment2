"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const port = process.env.PORT;
console.log("1");
(0, server_1.default)().then((app) => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
});
//# sourceMappingURL=app.js.map