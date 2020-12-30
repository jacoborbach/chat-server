const express = require('express');

const app = express();

app.use(express.json());

const port = 3001;
app.listen(3001, () => `server is listening on ${port}`)