const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const cookieParser = require('cookie-parser');

const app      = express();
const apiRoute = require('./routes/api');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((e) => console.error(e));

app.use(cors({
  origin: [process.env.DOMAIN + ':' + process.env.PORT],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use('/', apiRoute);

app.listen(process.env.PORT, () => {
  console.log('Listening on port ' + process.env.PORT);
});
