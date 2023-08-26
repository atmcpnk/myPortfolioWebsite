const path = require('path')
const app = require('./app')

const port = 8080;

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public/index.html')));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
