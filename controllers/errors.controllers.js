const globalErrorHandler = (err, req, res, next) => {
  res.status(err.statusCode).json({
    status: 'error',
    error: err,
    message: err.message,
    stack: err.stack
  })
}

module.exports = {
  globalErrorHandler
}