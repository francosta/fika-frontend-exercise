export const mapGenres = (genresArray) => {
  function transformGenres(originalArray) {
    return originalArray.reduce(function (prev, curr) {
      prev[curr.id] = curr.name;
      return prev;
    }, {});
  }

  return transformGenres(genresArray);
};
