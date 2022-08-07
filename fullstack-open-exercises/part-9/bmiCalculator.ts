function bmiCalculator(height: number, weight: number): string {
  const bmi: number = weight / ((height / 100) * (height / 100));
  if (bmi < 18.5) {
    return "Not Normal (unhealthy weight)";
  } else if (bmi > 18.5 && bmi < 25) {
    return "Normal and healthy";
  } else if (bmi > 25) {
    console.log(bmi);
    return "too unhealthy";
  }
}

console.log(bmiCalculator(180, 74));
