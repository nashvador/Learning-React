import express from "express";
import bmiCalc from "./bmiCalculator";
const app = express();

app.get("/bmi", (req, res) => {
  const height: number = Number(req.query.height);
  const weight: number = Number(req.query.weight);
  console.log(bmiCalc(height, weight));
  res.send({ height: height, weight: weight, result: bmiCalc(height, weight) });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
