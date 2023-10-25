var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
const express = require('express');
const Booking = require('./models/Bookings');
const app = express();
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO:
        // Replace the placeholder connection string below with your
        // Altas cluster specifics. Be sure it includes
        // a valid username and password! Note that in a production environment,
        // you do not want to store your password in plain-text here.
        const uri = "mongodb+srv://quest:lynnhunt@cluster0.8aif6n0.mongodb.net/BookingsDB?retryWrites=true&w=majority";
        mongoose.connect(uri).then((res) => {
            console.log('You have connected to the database');
            app.listen(3000);
        }).catch((err) => {
            console.log(err);
        });
        // The MongoClient is the object that references the connection to our
        // datastore (Atlas, for example)
        const client = new MongoClient(uri);
        // The connect() method does not attempt a connection; instead it instructs
        // the driver to connect using the settings provided when a connection
        // is required.
        yield client.connect();
        // Provide the name of the database and collection you want to use.
        // If the database and/or collection do not exist, the driver and Atlas
        // will create them automatically when you first write data.
        const dbName = "BookingsDB";
        const collectionName = "Bookings";
        // Create references to the database and collection in order to run
        // operations on them.
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        // Make sure to call close() on your client to perform cleanup operations
        yield client.close();
        // create a new booking route 
        app.post('/create-booking', (req, res) => {
            // .save().then((result) => { res.send(result). catch(err)}) will save an item to the database
        });
        app.get('/all-bookings', (req, res) => {
            // Gets all the Bookings in the database
            Booking.find().then((result) => {
            }).catch((err) => {
                console.log(err);
            });
        });
    });
}
run().catch(console.dir);
