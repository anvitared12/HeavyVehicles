const mongoose = require('mongoose');

const engineInputSchema = new mongoose.Schema({
    EngineNumber: { type: String, required: true },
    Displacement: { type: String, required: true },
    Power_Output: { type: String, required: true },
    Emmision_Norm: { type: String, required: true },
    FuelType: { type: String, required: true },
    submittedAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Ensure your User model is defined
        required: true
    }
});

module.exports = mongoose.model('EngineInput', engineInputSchema);
