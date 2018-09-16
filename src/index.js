module.exports = function solveEquation(equation) {  
  var xSquarePosition = equation.indexOf(' * x^2');
  var a = Number(equation.substring(0 , xSquarePosition))
  var xPosition = equation.indexOf(' * x ', xSquarePosition);
  var b = Number(equation[xSquarePosition + 7] + equation.substring(xSquarePosition + 9, xPosition))
  var c = Number(equation[xPosition + 5] + equation.substring(xPosition + 7))
  var answer1 = Math.round((-b + Math.sqrt(b * b - 4 * a * c))/(2 * a))
  var answer2 = Math.round((-b - Math.sqrt(b * b - 4 * a * c))/(2 * a))
  var solutions  = []
  solutions.push(answer1, answer2)
  return solutions.sort(function(a,b){return a-b})
}
