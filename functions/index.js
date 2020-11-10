const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HltY1AJiKyvZ9HbGg8f7xhYaqgjC2LsuqZbwBNUtA02wdwEkoZaH6WWcED2Upp7EPmXtEEDMDq0LjIBWhpCBJ1p00R0y4mACn');

// API
// example endpoint
const endpoint = `http://localhost:5001/evyatar-1ea31/us-central1/api`;

// - APP config
     const app = express();
// - Middleware
     app.use(cors({origin: true})); // security
     app.use(express.json()); // allows us to send data & parse json format
// - API routes
     app.get('/', (request, response) => response.status(200).send('hello world'))

     app.post('/payments/create', async (request, response) => {
         const total = request.query.total;
         console.log('Payment request received for this amount', total)

         const paymentIntent = await stripe.paymentIntents.create({
             amount: total, // subunits of the currency
             currency: "usd",
         });

         response.status(201).send({
             clientSecret: paymentIntent.client_secret,
         })
     })
// - Listen

exports.api = functions.https.onRequest(app)
