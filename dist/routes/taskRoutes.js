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
const express_1 = __importDefault(require("express"));
const task_1 = __importDefault(require("../models/task"));
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield task_1.default.getTasks();
    res.json(tasks);
}));
// Get a task by id
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const foundTask = yield task_1.default.getTaskById(id);
    res.json(foundTask);
}));
// Create a new task
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const description = req.body.description;
    yield task_1.default.createTask(description);
    res.status(201).json({ message: "Task created successfully" });
}));
// Update a task
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const description = req.body.description;
    yield task_1.default.updateTask(id, description);
    res.json({ message: "Task updated successfully" });
}));
// Delete a task
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    yield task_1.default.deleteTask(id);
    res.json({ message: "Task deleted successfully" });
}));
exports.default = router;
