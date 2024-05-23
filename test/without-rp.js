function divide(a, b) {
    try {
        let result = a/b;
        if(b == 0) return "Failure: Division by zero";

        return `Success: ${result}`;
    } catch (e) {
        throw new Error("Error:", e)
    }
}

console.log("");
console.log("📄 TRY/CATCH TEST");
console.time("⏰ Execution Time");

const result1 = divide(10, 2);
console.log(result1);
  
const result2 = divide(10, 0);
console.log(result2);

console.timeEnd("⏰ Execution Time");
console.log("");