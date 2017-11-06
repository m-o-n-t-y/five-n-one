const fortuneCookies = require('fortune-cookie');

const {map, addIndex} = require('ramda')
const mapIndexed = addIndex(map);
const createDoc = (v, i) => ({id: i, name: v, value: v})
const docs = mapIndexed(createDoc, fortuneCookies)

module.exports = app => {

  app.get('/fortunecookies', (req, res) => {
    res.send(docs)
  })
  app.get('/fortune-cookies', (req, res) => {
    res.send(docs)
  })
}