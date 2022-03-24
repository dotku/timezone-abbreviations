"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
console.log("timezones", index_1.default);
console.log("timezones", ...index_1.default.filter((item) => item.abbr === "AEST"));
