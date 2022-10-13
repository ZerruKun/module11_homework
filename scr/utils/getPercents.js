const getPercents = (percent, number) => {
  if (
    percent < 0 ||
    percent > 100 ||
    isNaN(percent) ||
    typeof percent !== "number"
  ) {
    return "Первое значение должно быть числом больше 0 (невключительно) и меньше 100 (включительно).";
  }
  if (typeof number !== "number" || isNaN(number)) {
    return "Второе значение должно быть числом.";
  }
  return (number / 100) * percent;
};

export default getPercents;