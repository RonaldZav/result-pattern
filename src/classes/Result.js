class Result {
  constructor(isSuccess, value, error) {
    this._isSuccess = isSuccess;
    this._value = value;
    this._error = error;
  }

  static Success(value) {
    return new Result(true, value, null);
  }

  static Failure(error) {
    return new Result(false, null, error);
  }

  isSuccess() {
    return this._isSuccess;
  }

  isFailure() {
    return !this._isSuccess;
  }

  getValue() {
    if (!this._isSuccess) {
      throw new Error("Cannot get the value of a failed result");
    }
    return this._value;
  }

  getError() {
    if (this._isSuccess) {
      throw new Error("Cannot get the error of a successful result");
    }
    return this._error;
  }
}

module.exports = Result;
