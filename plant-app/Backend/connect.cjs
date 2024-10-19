const {MongoClient} = require("mongodb")
require("dotenv").config({path: "./config.env"})


const express = require('express');
const bodyParser = require('body-parser');
//const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

// Replace with your MongoDB connection string
const uri = process.env.ATLAS_URI; 
const client = new MongoClient(uri);


app.use(bodyParser.urlencoded({ extended: false }));
app.post('/submit', async (req, res) => {
    try {
        await client.connect()
        const database = client.db("PlantPal-Sitter")
        const collection = database.collection("UserInfo")

        const data = {
            name: req.body.name,
            email: req.body.email
        };
        const result = await collection.insertOne(data);
        console.log('Document inserted:', result.insertedId);
        res.send('Data submitted successfully!');
      } catch (err) {
        console.error('Error inserting data:', err);
        res.send('Error submitting data.');
      } finally {
        await client.close();
      }

})

/*async function main() {
    //const Db = process.env.ATLAS_URI
    // Instance of MongoClient
    //const client = new MongoClient(Db)
    try {

        rl.question("Enter data to insert: ", (data) => {
            const doc = {data};
            collection.insertOne(doc)
            .then(() => console.log("Data inserted successfully"))
            .catch((err) => console.error("Error inserting data:", err))
            .finally(() => {
                rl.close();
                client.close();
            });
        });

        //collections.forEach((collection) => console.log(collection.s.namespace.collection))

    } catch(err) {
        console.error(err);
    }

}

main()*/