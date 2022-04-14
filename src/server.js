const express=require('express');
const path=require('path')

const app=express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.use(require('./routes/index'));

app.listen(app.get('port'), () => {
    console.log('Server on port: '  + app.get('port'));
});