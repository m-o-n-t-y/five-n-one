const emojis = require('emojis-list')

const {map, addIndex} = require('ramda')
const mapIndexed = addIndex(map);
const createDoc = (v, i) => ({id: i, name: v, value: v})
const docs = mapIndexed(createDoc, emojis)

module.exports = app => {

  app.get('/emojis', (req, res) => {
    res.send(docs)
  })
}