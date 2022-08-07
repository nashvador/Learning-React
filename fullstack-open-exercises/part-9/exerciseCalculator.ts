function exerciseCalculator(
  param: Array<string | number>,
  rating: number
): object {
  const arrayVal: number =
    Number(param.reduce((a, b) => Number(a) + Number(b))) / param.length;

  const exerciseData = {
    periodLength: param.length,
    trainingDays: param.filter((val) => val > 0).length,
    rating: 2,
    target: rating,
    ratingDescription: "its okay",
    average: arrayVal,
  };
  return exerciseData;
}

console.log(exerciseCalculator([3, 0, 2, 4.5, 0, 3, 1], 3));
