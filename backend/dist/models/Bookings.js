"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingsSchema = void 0;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
exports.bookingsSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    ServiceType: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    StreetAddress: {
        type: String,
        required: true
    },
}, { timestamps: true });
const Booking = mongoose.model('Booking', exports.bookingsSchema);
exports.default = Booking;
