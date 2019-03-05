# Setup Boilerplate for this project

## client

```bash
cd jgmc
npx create-react-app client
cd client
# Clean the code and start
npm start
```

## Client2
Download Frontend template from coreui and copy to client2 folder

```bash
cd client2
npm install
# Clean the code and start
npm start
```

## server

```bash
mkdir server
cd server
touch server.js
npm init
npm install -save express
```

Write some code in `server.js` and test

```javascript
const express = require('express');

// SETUP EXPRESS APP
const app = express();

// route testing
app.get('/test', (req, res) =>{
  console.log('Hello Node');
  res.send('Hello Node');
});

// LISTEN FOR REQUESTS
app.listen(5000, () => {
  console.log('Server running on port 5000...');
})
```