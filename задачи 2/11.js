function getSquareSides(length, width) {
    const result = [];
    let side = Math.min(length, width);
    while (side > 0) {
      result.push(side);
      length > width ? width -= side : length -= side;
      side = Math.min(length, width);
    }
    return result;
  }
  
  // Пример использования
  console.log(getSquareSides(10, 8)); // [ 8, 2, 2, 2, 2 ]