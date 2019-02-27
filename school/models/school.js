let mongoose = require('mongoose')
let School = require('.teacher')
let schema = mongoose.Schema

let school = new Schema ({
      name: { type: String, required: true },
      teachers: { type: Schema.Types.ObjectId, ref: "Teacher", virtual: true }
})

school.pre("remove", function (next) {
      school.remove({ school: this._id })
      .then(() => next())
      .catch(err => next(err))

})





module.exports = mongoose.model("School", school)