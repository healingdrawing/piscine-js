const hasCity = (country, arr) => {
  return (city) =>
    arr.some((elem) => city === elem)
      ? city + " is a city from " + country
      : city + " is not a city from " + country;
};
