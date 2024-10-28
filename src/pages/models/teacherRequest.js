const mongoose = require('mongoose');
const { Schema } = mongoose;

const teacherRequestSchema = new Schema({
    _userId: Schema.Types.ObjectId,
    introduction: String,
    greeting: String,
    attachments: [{
        name: String,
        description: String,
        url: String
    }],
    updatedDate: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ["new", "rejected", "accepted"],
        required: true,
    },
});

const TeacherRequest = mongoose.models.TeacherRequest || mongoose.model('TeacherRequest', teacherRequestSchema);

export default TeacherRequest;