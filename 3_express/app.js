const express = require('express')
const app = express()

const courses=[
    {id:1, name:"Nodejs"},
    {id:2, name:"Express"},
    {id:3, name:"SQL"}
]
    //get,post,dele,put
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/about', (req, res) => {
    res.send('We Create Impact')
})
app.get('/contact', (req, res) => {
    res.send('Contact us')
})

//Route parameters

app.get('/courses/:name', (req, res) => {
    console.log(req.params)
    let course=courses.find(course => course.name === req.params.name)
    if(!course) res.status(404).send("course looking for does not exist")
        res.send(course)

})

const port = process.env.PORT || 3000


app.listen(port, () => console.log(`port is running on ${port}`))