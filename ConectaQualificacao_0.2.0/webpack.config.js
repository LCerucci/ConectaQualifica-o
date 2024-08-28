import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

export default {
  entry: './src/index.js', // Arquivo principal da sua aplicação
  output: {
    filename: 'bundle.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'), // Diretório de saída
    publicPath: '/', // Caminho público para o bundle
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Regex para arquivos JavaScript
        exclude: /node_modules/, // Exclui node_modules
        use: {
          loader: 'babel-loader', // Usa o babel-loader para transpilar arquivos JavaScript
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'], // Resolve arquivos com a extensão .js
  },
  optimization: {
    minimize: true, // Ativa a minificação
    minimizer: [new TerserPlugin()], // Usa o Terser para minificação
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), // Diretório público para servir arquivos
    compress: true,
    port: 9000, // Porta do servidor de desenvolvimento
  },
  mode: 'production', // Define o modo de build como produção
};