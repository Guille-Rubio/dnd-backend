const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  race: {
    type: String,
    required: true 
  },
  sub_race: {
    type: String,
  },
  class: {
    type: String,
    required: true
  },
  sub_class: {
    type: String,
    required: false
  },
  atributes: [{name: {
    type: String
  }, val: {
    type: Number,
  }}],
  saving_throws: [{atribute: {type: String}}],
  proficency: {
    type: Number,
    default: 2
  },
  proficiencies: [{pro: {type: String}}],
  equipment: [{equip: {type: String}}],
  life: {
    type: Number,
    required: true
  },
  hit_die: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  traits: [{trait: {type: String}}],
  lenguages: [{lenguage: {type: String}}]

})

const Character = mongoose.model("Character", characterSchema)
module.exports = Character

// const character = new Character({
//   "name": "Aragorn",
//   "race": "Human",
//   "class": "Ranger",
//   "atributes": [
//     { "name": "Str", "val": 15 },
//     { "name": "Dex", "val": 14 },
//     { "name": "Con", "val": 13 },
//     { "name": "Int", "val": 12 },
//     { "name": "Wis", "val": 16 },
//     { "name": "Char", "val": 13 }
//   ],
//   "life": 11,
//   "hit_die": "d10",
//   "level": 1
// })