import express from 'express';
import path from 'path';
import { MongoClient } from 'mongodb';

import devBundle from './devBundle';
import template from './../template';

const CURRENT_WORKDIR_DIR = process.cwd();
const url =
  process.env.MONGO_URI || 'mongodb://localhost:27017/mernSimpleSetup';

MongoClient.connect(url, (err, db) => {
  console.log('Connected successfully to mongodb server');
  db.close();
});

const app = express();
devBundle.compile(app);

app.use('/dist', express.static(path.join(CURRENT_WORKDIR_DIR, 'dist')));

app.get('/', (req, res) => {
  res.status(200).send(template());
});

let port = process.env.PORT || 3000;
app.listen(port, function onStart(err) {
  err
    ? console.error('Error:', err)
    : console.info('Server started on port %s.'.port);
});
