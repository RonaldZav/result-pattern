# @ronaldzav/result-pattern
📁 Alternative to Try/catch for JavaScript

## Installation

```bash
npm install @ronaldzav/result-pattern
```
If you are using yarn:

```bash
yarn add @ronaldzav/result-pattern
```

You can use the latest version of `result-pattern` by adding it as a dependency in your `package.json` file:

```bash
    "dependencies": {
      "@ronaldzav/result-pattern": "github:ronaldzav/result-pattern"
    }
```

## Usage

```js
let { Result } = require('../src/main');

function divide(a, b) {
    if (b == 0) {
      return Result.Failure("Division by zero");
    }
    return Result.Success(a / b);
  }

  if (divide(10, 2).isSuccess()) {
    console.log("Success:", result1.getValue());

  } else {
    console.log("Failure:", result1.getError());

  }

```

## API

### Result
The `Result` class represents a result of a computation that may either be successful or failed.

#### Result.Success(value)
Returns a successful result with the given value.

#### Result.Failure(error)
Returns a failed result with the given error.

#### isSuccess()
Returns `true` if the result is successful, `false` otherwise.

#### isFailure()
Returns `true` if the result is failed, `false` otherwise.

#### getValue()
Returns the value of the successful result, or throws an error if the result is failed.

#### getError()
Returns the error of the failed result, or throws an error if the result is successful.

## Speed Comparison
![](https://github.com/RonaldZav/result-pattern/blob/master/test/speed-test-result.png)

## License
Copyright 2024 Ronald Zavaleta |
[Apache-2.0 License](https://github.com/RonaldZav/result-pattern/blob/master/LICENSE) | [Support](https://ronaldzav.com/discord)


