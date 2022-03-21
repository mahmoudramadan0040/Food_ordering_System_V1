import express from 'express';
import routes from './routes';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import helmet from 'helmet';


const app =express()
const PORT = configration.port || 3000;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(limiter);

app.use(express.json());
app.use(morgan('common'));
app.use(helmet());


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});