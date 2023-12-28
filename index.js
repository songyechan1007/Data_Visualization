const express = require('express')
const app = express()
const port = 3000
const userRoute = require('./route/userRoute');

app.use(express.json());
app.use('/User',userRoute);

app.get('/', (req, res) => {
  res.send('Test')
})

app.listen(3000,()=>{

});