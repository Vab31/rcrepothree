import express, { Application, Request, Response } from 'express';
import mainRoute from './routes';


// set port and host values:
const port: string = (process.env.PORT || '5000');
const host: string = 'http://127.0.0.1';

// create an express application:
const app: Application = express();

// express app will use json format:
app.use(express.json());

// express app will use main route for '/api' route:
app.use('/api', mainRoute);

// express app will listen to specific port:
app.listen(port, (): void => {
    console.log(`Server is running at ${host}:${port}/`);
});
