const express=require('express')
const mongoose = require('mongoose')
const cors=require('cors')
require('dotenv').config();
const process = require('process');
let port = process.env.PORT || 5000
let mongoUri = process.env.MONGO
const blogrouter=require('./routes/blogRoutes')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
mongoose.set('strictQuery', false)
//'mongodb://localhost/blogs_vinee'
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},()=>console.log("mongo database is connected.."));
app.use('/blogs',blogrouter)
app.listen(port, () => console.log(`server is running at port ${port}....`));
