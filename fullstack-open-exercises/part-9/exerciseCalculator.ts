interface exerciseData {
  periodLength?: number;
  trainingDays?: number;
  rating?: number;
  target?: number;
  ratingDescription?: string;
  average?: number;
}

const parseArgument = (args: Array<string>): exerciseData => {
  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    const convertArgsToNumber: Array<number> = args.map((str) => {
      return Number(str);
    });
    const ratingValue: number = convertArgsToNumber[2];
    const removeRatingfromArgsToNumber: Array<number> =
      convertArgsToNumber.slice(3);
    const arrayVal: number =
      removeRatingfromArgsToNumber.reduce((a, b) => a + b) /
      removeRatingfromArgsToNumber.length;

    const exerciseInformation: object = {
      periodLength: removeRatingfromArgsToNumber.length,
      trainingDays: removeRatingfromArgsToNumber.filter((number) => number > 0)
        .length,
      rating: 2,
      target: Number(ratingValue),
      ratingDescription: "Its okay",
      average: Number(arrayVal),
    };
    return exerciseInformation;
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

try {
  console.log(parseArgument(process.argv));
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
