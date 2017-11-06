const {map, addIndex} = require('ramda')

const starWarsNames = require('starwars-names');

const mapIndexed = addIndex(map);
const createDoc = (v, i) => ({id: i, name: v, value: v})
const docs = mapIndexed(createDoc, starWarsNames.all)

module.exports = app => {

  app.get('/StarWarsNames', (req, res) => {
    res.send(docs)
  })
}