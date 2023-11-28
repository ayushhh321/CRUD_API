//added server.js in package.json so use npm run serve

const express=require('express')
const app = express()

//routes- we have to declare routes so that web browser access the our web page



app.listen(3000, ()=> {
  console.log('App is running on port 3000 <ayush bhai>')
})