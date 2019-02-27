let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let classroom = new Schema ({
      name: { type: String, required: true},
      school: { type: objectId, ref: "School", required: true}
})


module.exports = mongoose.model("School", school)
