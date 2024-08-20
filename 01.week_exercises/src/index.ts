import { port } from './config';
import { greeting } from './helpers';
import { logServerMessage } from './logger';
import express, { Request, Response } from 'express';
import { Student, students } from './dummyData';

const app = express();

app.use(express.json());

app.get('/students', (req: Request, res: Response) => {
  res.json(students);
});

app.get('/students/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const student = students.find(
    (student) => student.id === id
  );
  if (!student) {
    res.status(404).json({ message: 'student not found!' });
  }
  res.status(200).json(student);
});

app.post('/students', (req: Request, res: Response) => {
  const student: Student = req.body;
  students.push(student);
  res.status(201).json(student);
});

app.put('/students/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const student = students.find(
    (student) => student.id === id
  );
  if (!student) {
    res.status(404).json({ message: 'student not found!' });
  } else {
    const grade = req.body.grade;
    if (grade !== undefined) student.grade = grade;
    res.status(201).json(student);
  }
});

app.delete('/students/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const studentIndex = students.findIndex(
    (student) => student.id === id
  );
  if (studentIndex === -1) {
    res.status(404).json({ message: 'student not found!' });
  } else {
    students.splice(studentIndex, 1);
    console.log(students);
    res.status(204).json({ message: 'student erased!' });
  }
});

app.listen(port, () => console.log(logServerMessage(greeting())));
