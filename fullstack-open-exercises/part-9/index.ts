import express from "express";
import bmiCalc from "./bmiCalculator";
const app = express();

app.use(express.json());

app.get("/bmi", (req, res) => {
  const height: number = Number(req.query.height);
  const weight: number = Number(req.query.weight);
  console.log(bmiCalc(height, weight));
  res.send({ height: height, weight: weight, result: bmiCalc(height, weight) });
});

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (!Array.isArray(daily_exercises)) {
    return res.status(400).send({ error: "Doesnt work" });
  }

  const arrayVal: number =
    daily_exercises.reduce((a: number, b: number) => a + b) /
    daily_exercises.length;

  interface exerciseData {
    periodLength: number;
    trainingDays: number;
    rating: number;
    target: number;
    ratingDescription: string;
    average: number;
  }

  const exerciseInformation: exerciseData = {
    periodLength: daily_exercises.length,
    trainingDays: daily_exercises.filter((val: number) => val > 0).length,
    rating: 2,
    target: target,
    ratingDescription: "its okay could be better",
    average: arrayVal,
  };

  res.send(exerciseInformation);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
