const mongoose = require('mongoose');
const { Schema } = mongoose;

const purchasementSchema = new Schema({
    _courseId: Schema.Types.ObjectId,
    _userId: Schema.Types.ObjectId,
    boughtDate: { type: Date, default: Date.now },
});

const Purchasement = mongoose.models.Purchasement || mongoose.model('Purchasement', purchasementSchema);

export default Purchasement;