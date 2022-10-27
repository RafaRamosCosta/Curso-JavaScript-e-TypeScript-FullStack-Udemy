exports.middlewareGlobal = (req, res, next) => {
  if (req.body.cliente) {
    console.log(`Seja bem vindo ${req.body.cliente}`);
  }
  next();
};

exports.outroMiddleware = (req, res, next) => {
  console.log('Sou seu outro middleware');
  next();
};
