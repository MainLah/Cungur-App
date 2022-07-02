const mongoose = require("mongoose");

const Cungur = mongoose.model("Cungur", {
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  messages: {
    type: String,
  },
});

module.exports = Cungur;
