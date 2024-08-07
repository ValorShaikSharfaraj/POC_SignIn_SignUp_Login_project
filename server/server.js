import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';

const app = express();

//  middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack

const port = 8080;

app.get('/', (req, res)=> {
  res.status(201).json('Home GET Request');
})

// start server only when we have valid connection
connect().then(() => {
  try {
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`);
    })
  } catch (error) {
    console.log('Cannot connect to the server');
  }
}).catch(error => {
  console.log('Invalid database connection..!');
})


app.listen(port, ()=> {
  console.log(`server connected to http://localhost:${port}`);
}) 