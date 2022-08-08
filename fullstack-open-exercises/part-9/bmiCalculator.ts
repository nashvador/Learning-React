interface MultiplyValues {
  value1: number;
  value2: number;
}

const parseArguments = (args: Array<string>): MultiplyValues => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

const bmiCalc = (height: number, weight: number): string => {
  const bmi: number = weight / ((height / 100) * (height / 100));
  if (bmi < 18.5) {
    return "Not Normal (unhealthy weight)";
  } else if (bmi > 18.5 && bmi < 25) {
    return "Normal and healthy";
  } else if (bmi > 25) {
    return "too unhealthy";
  }
};

try {
  const { value1, value2 } = parseArguments(process.argv);
  console.log(bmiCalc(value1, value2));
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
