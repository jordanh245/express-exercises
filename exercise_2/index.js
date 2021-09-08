const PORT = 3001
const express = require("express")
const app = express()

const cities = [
{ cityName: "Sao Paulo",  continents: 'South America'},
{ cityName: "McMurdo Station", continents:'Antarctica'},
{ cityName: "London",  continents:'Europe'},
{ cityName: "Tokyo",  continents:'Asia'},
{ cityName: "Boston", continents:'North America'},
{ cityName: "Cairo", continents:'Africa'},
{ cityName: "New York",  continents:'North America'},
{ cityName: "Toronto",  continents:'North America'},
{ cityName: "Chicago",  continents:'North America'},
{ cityName: "Houston",  continents:'North America'}
];

const info = {
    name: 'Jordan',
    city: 'Tampa',
    state: 'Florida'
}


const movies = [
    { movieName:"Fried Green Tomatoes", poster:`<img src= "https://m.media-amazon.com/images/I/71H6zaUlJDL._SY445_.jpg">`},
    { movieName:"EndGame", poster:`<img src= "https://images.immediate.co.uk/production/volatile/sites/3/2019/03/09B_AEG_DomPayoff_1Sht_REV-7c16828.jpg?webp=true&quality=90&resize=620%2C413">`},
    { movieName:"Up", poster:`<img src= "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg">`},
    { movieName:" Pan's Labyrinth", poster:`<img src= "https://upload.wikimedia.org/wikipedia/en/6/67/Pan%27s_Labyrinth.jpg">`},
    { movieName:"ratatouille", poster:`<img src= "https://m.media-amazon.com/images/I/51MJQKcJVFL._AC_.jpg">`},
]

const es6Renderer = require('express-es6-template-engine');
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");


app.get ('/', (req, res) =>{
    res.send('Node and express are just lovely')
})

app.get('/cities', (req, res) => {
    res.render('city', {
        locals: {
            cities
        }
    })
})
app.get('/invalid', (req, res) => {
    res.statusCode = 400,
    res.send("This is an invalid route")
})
app.get ('/Jordan', (req, res) => {
    res.send(info)
})

app.get('/movies', (req, res) => {
    res.render('movies',{
    locals: {
        movies
    }
    })
})

app.use(express.static('public'));
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})