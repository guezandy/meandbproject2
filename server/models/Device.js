var mongoose = require('mongoose');

// Create the MovieSchema.
var DeviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  password: {
  	type: String,
  	required: true
  }
});

// Export the model.
module.exports = mongoose.model('device', DeviceSchema);