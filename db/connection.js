import mongoose from 'mongoose';

//variable to hold name of locally-hosted MongoDB database
const local_DB_Name = 'gnomeazonDB';

//tell mongoose where to look for database
let MONGODB_URI = 
  process.env.PROD_MONGODB || 
  `mongodb://127.0.0.1:27017/${local_DB_Name}`;

// Uncomment to debug Mongoose queries
// mongoose.set('debug', true);

//command to create indexes in MongoDB by default for faster queries
mongoose.set('useCreateIndex', true);

//This is for Model.findByIdAndUpdate method, specifically so that {new: true} is the default
//which means the response to and update will return the record with newly updated information
//rather than the original pre-update data.
mongoose.set('returnOriginal', false);

//Setup connection for MongoDB
//https://mongoosejs.com/docs/connections.html#connections
mongoose
  .connect(MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true})
  .catch((error)=>console.error('Error connecting to MongoDB', error.message))

// Listen to MongoDB events
// Learn more: https://mongoosejs.com/docs/connections.html#connection-events
mongoose.connection.on('disconnected', () => console.log('Disconnected from MongoDB'));

// Listen to any errors while connected to MongoDB
// Learn more: https://mongoosejs.com/docs/connections.html#error-handling
mongoose.connection.on('error', (error)=> console.error(`MongoDB connection error: ${error}`));

export default mongoose.connection;
