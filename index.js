let express = require('express');
let app = express();

let port = process.env.PORT || 7566;

app.set('view engine', 'ejs');

app.get('/', (request, respone) => {
    respone.render('home')
});

app.get('/about', (request, respone) => {
    respone.render('about')
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});