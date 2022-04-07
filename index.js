// this will import dotenv 
require('dotenv').config;

// import express and fruits to our index.js
const express = require('express');
const fruits = require('./fruits');


const PORT = process.env.PORT || 4000;

// this is our instance of express
const app = express();



// this does our route to / 
app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.get('/response-content', (req,res) => {
    res.send("Welcome to my webpage")
})

app.get('/greet/:slug', (req, res) => {
    res.send(`Why hello there, ${req.params.slug}`)
    console.log(req.params);
});
app.get('/five', (req,res) => {
    let arr = [1,2,3,4,5]
    res.send(arr)
})
app.get('/evens/:slug', (req,res) => {
    const N = parseInt(req.params.slug);
    const arr = Array.from(Array(N+1
        ).keys()).slice(1);
    const evens = arr.filter(num => num % 2 == 0)
    res.send(evens)
})

app.get('/namelength/:name', (req,res) => {
    res.send(`${req.params.name.length}`)
})

app.get('/fruits', (req,res) => {
    res.send(fruits)
})

app.get('/fruits/:name' , (req,res) => {
    let result = fruits.filter(fruit => fruit.name.includes(`${req.params.name}`))
    res.send(result)
})


app.listen(PORT, () => console.log(`running on port ${PORT}`))

