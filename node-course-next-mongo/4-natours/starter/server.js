// This is our conection with app.js

const app = require('./app');
const port = 3000;

app.listen(port, () => {
  console.log(`The serves has started at port ${port}`);
});
