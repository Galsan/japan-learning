const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
  name: String,
  description: String,
  _teacherId: Schema.Types.ObjectId,
  wholeDuration: Number,
  durationOfEachClass: Number,
  thumbnailUrl: String
});

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

export default Course;