const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const CustomerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 64
        },

        balance: {
            type: Number,
            min: 0
        }
    },
    { timestamps: true }
)

CustomerSchema.plugin(autopopulate)

module.exports = mongoose.model('Customer', CustomerSchema)
