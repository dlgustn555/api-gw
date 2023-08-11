const errorHandler = async (ctx, next) => {
  try {
    await next()
  } catch (err: any) {
    ctx.status = err.statusCode || err.status || 500
    ctx.body = {
      message: err.message,
    }
  }
}

export default errorHandler
