const path = require('path'); // importando o módulo path do node

module.exports = {
  mode: 'production', // modo de desenvolvimento -> não minifica o código como no modo 'production'
  entry: './src/index.js', // arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'), // pasta de saída
    filename: 'bundle.js', // nome do arquivo de saída
  },
  module: {
    rules: [
      {
        exclude: /node_modules/, // excluindo a pasta node_modules
        test: /\.js$/, // arquivos terminam com .js
        use: {
          loader: 'babel-loader', // usando o babel-loader
          options: {
            presets: ['@babel/env'],
          },
        },
      }, {
        test: /\.css$/, // arquivos terminam com .css
        use: ['style-loader', 'css-loader'],
      }
      
    ],
  },
  devtool: 'source-map', // gera um arquivo .map para debugar o código do arquivo original (não o bundle.js)
};
