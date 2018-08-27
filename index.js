const express = require('express');
const session = require('express-session');
const app = express();

app.use(
  session({
    // this mandatory configuration ensures that session IDs are not predictable
    secret: 'SunnyB3aches',
    // this option says if you haven't changed anything, don't resave. It is recommended and reduces session concurrency issues
    resave: false,
    // this option says if I am new but not modified, still save
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  if (!req.session.counter) req.session.counter = 0;
  console.log('counter', req.session.counter++);
  next();
});

app.get('/', (req, res, next) => {
  res.send('Hello');
});

app.listen(8080, () => console.log('Listening at http://localhost:8080'));
