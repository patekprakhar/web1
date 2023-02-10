const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));



app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/about', (req, res) => {
    res.render('about');
  });
  
  app.get('/projects', (req, res) => {
    res.render('projects');
  });

  app.get('/services', (req, res) => {
    res.render('services');
  });

  app.get('/contact', (req, res) => {
    res.render('contact');
  });
 