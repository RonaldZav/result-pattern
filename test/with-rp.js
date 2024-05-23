let { Result } = require('../src/main');

function divide(a, b) {
    if (b == 0) {
      return Result.Failure("Division by zero");
    }
    return Result.Success(a / b);
  }
  
  console.log("");
  console.log("📄 RESULT PATTERN TEST");
  console.time("⏰ Execution Time");
  
  const result1 = divide(10, 2);
  if (result1.isSuccess()) {
    console.log("Success:", result1.getValue());
  } else {
    console.log("Failure:", result1.getError());
  }
  
  const result2 = divide(10, 0);
  if (result2.isSuccess()) {
    console.log("Success:", result2.getValue());
  } else {
    console.log("Failure:", result2.getError());
  }
  
  console.timeEnd("⏰ Execution Time");
  console.log("");