const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const indexRoute = require('./routes/indexRoute');
const usersRoute = require('./routes/usersRoute');

app.use (express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/', indexRoute);
app.use('/users', usersRoute);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
