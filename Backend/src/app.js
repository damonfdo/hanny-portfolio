import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import corsOptions from './Config/corsOption.js';


// Import routes 
import portfolioRoutes from './Routes/Portfolio.routes.js';
import userRotues from './Routes/User.routes.js';



//   Define app 
const app = express();
app.use(express.static('Public'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors(corsOptions));


// Register Routes 
app.use('/portfolio', portfolioRoutes);
app.use('/user', userRotues);


export default app;