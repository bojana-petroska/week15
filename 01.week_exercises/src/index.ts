import { port } from './config';
import { greeting } from './helpers';
import { logServerMessage } from './logger';
import express, { NextFunction, Request, Response } from 'express';
import { Student, students } from './dummyData';

const app = express();

app.use(express.json());

// middleware
let count = 0;
const logEachRequest = (req: Request, res: Response, next: NextFunction) => {
  count++;
  console.log(`request executed ${count}`);
  next();
};

const validation = (req: Request, res: Response, next: NextFunction) => {
  const { id, name, grade } = req.body;
  if (id === 'number' && name === 'string' && grade === 'string') {
    next();
  }
};

app.use(logEachRequest);

app.get('/students', (req: Request, res: Response) => {
  const grade = <string>req.query.grade;
  if (grade) {
    const filteredStudents = students.filter(
      (student) => student.grade.toString() === grade
    );
    res.json(filteredStudents);
  }
  res.json(students);
});

app.get('/students/:id', (req: Request, res: Response) => {
  // const id = parseInt(req.params.id);
  const includeGrade: boolean = req.query.includeGrade === 'true';
console.log(includeGrade)
  if (includeGrade === undefined) {
    res.status(404).json({ message: 'student not found!' });
  }

  const result = students.map((student) => {
    if (includeGrade) {
      return {
        id: student.id,
        name: student.name,
        ...(includeGrade && { grade: student.grade }),
      };
    }
  });
  res.json(result);

  // const student = students.find((student) => student.id === id);

  //   // if (!student) {
  //   //   res.status(404).json({ message: 'student not found!' });
  //   // } else {
  //   //   const studentGradeCheck = includeGrade ? student :
  //   //   res.status(200).json(student);
  //   // }
});

app.post('/students', validation, (req: Request, res: Response) => {
  const student: Student = req.body;
  students.push(student);
  res.status(201).json(student);
});

app.put('/students/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const student = students.find((student) => student.id === id);
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
  const studentIndex = students.findIndex((student) => student.id === id);
  if (studentIndex === -1) {
    res.status(404).json({ message: 'student not found!' });
  } else {
    students.splice(studentIndex, 1);
    console.log(students);
    res.status(204).json({ message: 'student erased!' });
  }
});

app.listen(port, () => console.log(logServerMessage(greeting())));
