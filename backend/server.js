// backend/server.js
const express = require('express');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');
const cors = require('cors');
const path=require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const _dirname=path.resolve();
if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,'/frontend/build')));

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
  })
}
else{
  app.get("/",(req,res)=>{
    res.send("API is running");
  });
}

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', recipeRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});