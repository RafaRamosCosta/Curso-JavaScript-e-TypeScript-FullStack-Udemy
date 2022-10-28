exports.middlewareGlobal = (req, res, next) => {
  res.locals.variavelLocal = 'Este é o valor da variável local';
  next();
};

exports.outroMiddleware = (req, res, next) => {
  console.log('Sou seu outro middleware');
  next();
};
