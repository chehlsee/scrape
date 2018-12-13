var mongoose = require("mongoose");

// save a reference to the Schema constructor
var Schema = mongoose.Schema;

// using the Schema constructor, create a new Note Schema object
var NoteSchema = new Schema ({
  title:{
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

// this creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);

// export the Note model
module.exports = Note;