"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
// Get all tasks
const getTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database_1.default.query('SELECT * FROM tasks ORDER BY id ASC');
    return result.rows;
});
// Get a single task by id
const getTaskById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database_1.default.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return result.rows[0];
});
// Create a new task
const createTask = (description) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.query('INSERT INTO tasks (description) VALUES ($1)', [description]);
});
// Update a task
const updateTask = (id, description) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.query('UPDATE tasks SET description = $1 WHERE id = $2', [description, id]);
});
// Delete a task
const deleteTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.query('DELETE FROM tasks WHERE id = $1', [id]);
});
exports.default = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
};
