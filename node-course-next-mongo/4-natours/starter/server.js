// Settind emv varialbles
const dotenv = require('dotenv');
//-----How to set environemetn valiables
// This next line will provide access to the global environmet variables defined in teh config.env file
dotenv.config({ path: './config.env' });
const port = process.env.PORT;

// This is our conection with app.js
// on order to get access to the env variables wee need to call the line below just after setting our dotenv ...
const app = require('./app');

//-----How ro get the environemetn valiables
// By default express sets environment variables to  development
// this varialbes are global variables taht are used to set the  to define the environment
console.log(app.get('env'));

// We can check those var console logging process.env
//console.log(process.env);

app.listen(port, () => {
  console.log(`The serves has started at port ${port}`);
});
