class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.isOperational = true;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.error = `${statusCode}`.startsWith("4")
      ? "Not Found"
      : "Internal Server Error";
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ApiError;
