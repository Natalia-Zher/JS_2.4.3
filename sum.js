const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  // берутся значения значения параметров a и b,
  // суммируются и записываются в константу sum
  sum > 50 ? (bonus = 50) : (bonus = sum);
  // полученное значение sum сравнивается с 50
  // если больше 50, то бонус равен 50, если меньше или равно 50, то бонус равен
  // получившейся ранее сумме sum
  return bonus;
};

// console.log(calculateBonus(5, 5));

// Export for testing
module.exports = calculateBonus;
