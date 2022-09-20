const fs = require('fs').promises;
module.exports = (caminho, dados) => {
              // o caminho deve ser absoluto no writeFile
  fs.writeFile(caminho, dados, { flag: 'w' }); // a flag permite que o arquivo seja aberto para sobrescrita(w) ou adição(a) de conteúdo
};
