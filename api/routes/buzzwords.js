
const buzzwords = require('buzzwords');

const {map, addIndex} = require('ramda')
const mapIndexed = addIndex(map);
const createDoc = (v, i) => ({id: i, name: v, value: v})
const docs = mapIndexed(createDoc, buzzwords)


module.exports = app => {

  app.get('/buzzwords', (req, res) => {
    res.send(docs)
  })
}