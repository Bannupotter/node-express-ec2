import express from 'express';


const app = express()

app.listen(3000, () => console.log('Api running on port 5001'))

app.get('/', (req, res) => res.json('My Api running'))


