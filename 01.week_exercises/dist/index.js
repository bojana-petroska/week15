"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const helpers_1 = require("./helpers");
const logger_1 = require("./logger");
const express_1 = __importDefault(require("express"));
const dummyData_1 = require("./dummyData");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/students', (req, res) => {
    res.json(dummyData_1.students);
});
app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = dummyData_1.students.find((student) => student.id === id);
    if (!student) {
        res.status(404).json({ message: 'student not found!' });
    }
    res.status(200).json(student);
});
app.post('/students', (req, res) => {
    const student = req.body;
    dummyData_1.students.push(student);
    res.status(201).json(student);
});
app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = dummyData_1.students.find((student) => student.id === id);
    if (!student) {
        res.status(404).json({ message: 'student not found!' });
    }
    else {
        const grade = req.body.grade;
        if (grade !== undefined)
            student.grade = grade;
        res.status(201).json(student);
    }
});
app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const studentIndex = dummyData_1.students.findIndex((student) => student.id === id);
    if (studentIndex === -1) {
        res.status(404).json({ message: 'student not found!' });
    }
    else {
        dummyData_1.students.splice(studentIndex, 1);
        console.log(dummyData_1.students);
        res.status(201).json({ message: 'student erased!' });
    }
});
app.listen(config_1.port, () => console.log((0, logger_1.logServerMessage)((0, helpers_1.greeting)())));
