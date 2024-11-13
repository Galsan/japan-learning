const mongoose = require('mongoose');
const { Schema } = mongoose;

const teacherRequestSchema = new Schema({
    _userId: Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    occupation: String,
    fileExtention: String,
    updatedDate: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ["new", "pending", "rejected", "accepted"],
        required: true,
    },
});

const TeacherRequest = mongoose.models.TeacherRequest || mongoose.model('TeacherRequest', teacherRequestSchema);

export default TeacherRequest;