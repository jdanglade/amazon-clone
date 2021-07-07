const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const {
  UserDimensions,
} = require("firebase-functions/lib/providers/analytics");
const stripe = require("stripe")();

// API

// App Config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => {
  response.status(200).send("Hello World!");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received!", total);

  const paymentIntents = await stripe.paymentIntents.create({
    amount: total, // Subunits -- cents
    currency: "usd",
  });

  //Ok - Created
  response.status("201").send({
    clientSecret: paymentIntents.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);
