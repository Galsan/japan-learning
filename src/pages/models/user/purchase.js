const mongoose = require('mongoose');
const { Schema } = mongoose;

const purchaseSchema = new Schema({
    _courseId: Schema.Types.ObjectId,
    _userId: Schema.Types.ObjectId,
    boughtDate: { type: Date, default: Date.now },
});

const Purchase = mongoose.models.Purchase || mongoose.model('Purchase', purchaseSchema);

export default Purchase;