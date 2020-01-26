const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Connect config.env to server.js
dotenv.config({ path: './config.env' });

//App files should only after be required AFTER config.env file is read
const app = require('./app');

// Connect to DB
if (process.env.NODE_ENV == 'development') {
  mongoose.connect('mongodb://localhost:27017/overseasDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} else {
  mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server on, mis amigos.');
  console.log(`Listening on port ${port}...`);
});
