exports.paginaInicial = (req, res) => {
  res.render('index');
  // console.log(`Nome do cliente: ${req.session.nome} ${req.session.sobrenome}`);
  // next();
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
