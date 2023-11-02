const express = require('express');
const app  = express();
const path = require('path');
const hbs = require('hbs');


require('./db/connect');
const Client = require('./model/contact');



// Using Path Module

const view_path= path.join(__dirname, "../views");
const static_path = path.join(__dirname, '../public');




// Middlewares

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'hbs');
app.set('views', view_path);
app.use(express.static(static_path));




// Routing


app.get('/', (req,res)=>{
    res.render('index')
})


app.post('/contact', async(req,res)=>{
    try {
        const clientone= new Client({
            name: req.body.username,
            email: req.body.email,
            message: req.body.message,
        })
        const result = await clientone.save();
        res.status(201).render('index');
    } catch (error) {
        res.status(400).send(error);
    }
})




app.listen(8000,()=>{
    console.log('the server is running on port 8000')
})

