const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51J76r4DXPalGk4XGGB0tY7VhkAoRpMVeAJT6ZuucLmm6QJXZNgJBLIGyYLHelJDsh3GpVbxKv4dqcv1nlvqMsFjf005uXfktSw"
);

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
