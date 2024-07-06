const errorHandler = (err, req, res, next) => {
  const errCode = err.statusCode || 500;
  const errStatus = err.status || "error";
  sendErrorFroDev(err, res, errCode, errStatus);
  // sendErrorFroPro(err, res, errCode, errStatus);
};

const sendErrorFroDev = (err, res, errCode, errStatus) => {
  return res.status(errCode).json({
    // errors: err,
    status: errStatus,
    error: err.error,
    message: err.message,
    isOperational: err.isOperational,
    stack: err.stack,
  });
};

const sendErrorFroPro = (err, res, errCode, errStatus) => {
  return res.status(errCode).json({
    status: errStatus,
    error: err.error,
    message: err.message,
  });
};

module.exports = errorHandler;
