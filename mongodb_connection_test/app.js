//Importing Dependencies
var express = require("express")
var app = express();
const {MongoClient} = require("mongodb")

//Setting up link to database
require("dotenv").config()
const uri = process.env.ATLAS_URI
const client = new MongoClient(uri)
async function run() {
    await client.connect()
    const database = client.db("sample_airbnb")
    const collection = database.collection("listingsAndReviews")
    console.log("connected successfully")
    const findQuery = { beds: 1 };

    try {
        const cursor = await collection.find(findQuery).sort({ name: 1 }).limit(15);
        await cursor.forEach(airbnb => {
        console.log(`${airbnb.name}\n`);
        });
        // add a linebreak
        console.log();
    } catch (err) {
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
    }
    }
let result = run()

