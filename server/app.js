const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const chalk = require('chalk');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = config.get('port') ?? 8080;

// if (process.env.NODE_ENV === 'production') {
//   console.log('Production');
// } else {
//   console.log('Development');
// }

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'));
    chalk.green('Mongo connected');
    app.listen(PORT, () => console.log(chalk.green(`Server ${PORT}`)));
  } catch (a) {
    console.log(chalk.red(e.messege));
    process.exit(1);
  }
}

start();
