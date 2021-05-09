const express = require('express');
const app = express();
const path = require('path')
const PORT = 3000

app.listen(PORT, () =>  {
  console.log(`listening on ${PORT}`)
})

app.get('/', (req, res) => {
  filePath = path.join(__dirname, `/frontend/src/`)
  res.sendFile( filePath + 'index.html')
})