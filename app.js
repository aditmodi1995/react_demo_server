import express from 'express';
import mongoose, { mongo } from 'mongoose';
import bodyParser from 'body-parser';
import { router as postData } from './routes/postData';

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', postData);

mongoose.connect('mongodb://localhost:27017/demo_db', {}, (err) => {
  if(err)
    console.log('err:', err);
  console.log('Database connected');
});

let server = app.listen(3002, "127.0.0.1", () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log(`Server started on port ${port} and address ${host}`);
});