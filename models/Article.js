var mongoose = require("mongoose");

// save a reference to the schema constructor
// this will save an instance and can nest keys
var Schema = mongoose.Schema;

// using the Schema constructor, create a new UserSchema object
var ArticleSchema= new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  link: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {type: Date, default: Date.now},
  link: {
    type: String,
    required: true,
    unique: true
  },
  subtext: {
    type: String
  },
  updated: {
    type: Boolean,
    default: false
  },
  // store the ids in an array
  note: [
    {
      type: Schema.Types.ObjectId,
      // the objectid is refering to the id in the note model
      ref: "Note"
    }
  ]
});

// add a plugin Unique validator
// ArticleSchema.plugin(uniqueValidator);

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;


