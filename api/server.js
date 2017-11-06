const express = require('express')
const cors = require('cors')

const app = express()
const colorRoutes = require('./routes/colors')
const buzzwordsRoutes = require('./routes/buzzwords')
const fortuneCookieRoutes = require('./routes/fortune-cookies')
const emojiRoutes = require('./routes/emojis.js')
const starwarsRoutes = require('./routes/starwars')

app.use(cors({ credentials: true }))
colorRoutes(app)
buzzwordsRoutes(app)
fortuneCookieRoutes(app)
emojiRoutes(app)
starwarsRoutes(app)

// load routes here

app.get('/', (req, res) => res.send('5n1 API Server'))

app.listen(5000)
console.log('Server listening at 5000')