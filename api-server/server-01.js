const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app-01');

dotenv.config({path: './config.env'})
// Config below is required for versions of Mongoose before v6.0
// and is needed as the 2nd argument to connect
// const DB_CONGIF = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// };

const DB_CONN= 
  process.env.NODE_ENV === 'production' ?
  process.env.DATABASE_PRODUCTION.replace('<PWD>', process.env.DATABASE_PASSWORD) : process.env.DATABASE;


// This return a promise so we can gain access to the
// connection object using a .then()
mongoose.connect(DB_CONN)
.then( conn => {
  // console.og(conn.connectons);
  console.log('Successfully connected to MongoDB!');
})


// const newStudent = new Student({
//   name: 'Nicolos Smith',
//   email: 'niolos@gmail.com',
//   cohort: '2',
//   phoneNumber: '8769876542',
//   grade: 96,
//   registrationFee: 6500
// })

// newStudent.save().then( (doc)=> {
//   console.log(doc);
// }).catch( err => {
//   console.log(`ERROR : ${err}`);
// })


const port = 5000;
app.listen(port, ()=>{
  console.log(`Server Listening on Port ${port}...`);
})