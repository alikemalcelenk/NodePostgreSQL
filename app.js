const express = require('express');
const app = express();

app.use(express.json());

//routes
const learningPathRouter = require('./routes/learningPath');

app.use('/lp', learningPathRouter);

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
