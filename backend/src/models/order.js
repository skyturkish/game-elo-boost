const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const OrderSchema = new mongoose.Schema(
    {
        customer: {
            type: mongoose.ObjectId,
            ref: 'Customer',
            autopopulate: false,
            required: true
        },
        booster: {
            type: mongoose.ObjectId,
            ref: 'Booster',
            autopopulate: false
        },
        state: {
            type: String,
            enum: [
                'active',
                'process',
                'released',
                'unavailable',
                'canceled',
                'completed'
            ],
            default: 'active'
        },
        gameType: {
            type: String,
            required: true
        }
    },
    {
        strict: false,
        timestamps: true
    }
)

OrderSchema.plugin(autopopulate)

OrderSchema.index({ gameType: 1, state: 1, booster: 1 })

module.exports = mongoose.model('Order', OrderSchema)
