const removeFromArray = function(array, ...allitems) {

  const newArray = [];

  array.forEach((item) => {

    if (!allitems.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
