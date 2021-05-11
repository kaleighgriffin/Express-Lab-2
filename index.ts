import express from 'express';
import path from 'path';
import homepageRoutes  from './routes/homepage';
import specialtyPizzaRoutes from './routes/specialty-pizza';
import reviewRoutes from './routes/review';
import pizzaBuilderRoutes from './routes/pizza-builder';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", homepageRoutes);
app.use("/", specialtyPizzaRoutes);
app.use("/", reviewRoutes);
app.use("/", pizzaBuilderRoutes);

const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));