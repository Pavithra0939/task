import MongoClient from "mongodb";
// Connection URL and database name
const uri =
'mongodb+srv://hodit:123@cluster0.nza4ca7.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'todolistapp';
// Create a new MongoClient
const MongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true
});
// Function to insert data into MongoDB
async function insertData() {
 try {
 // Connect to the MongoDB server
 await client.connect();
 // Select the database
 const db = client.db(dbName);
 // Create a collection (table)
 const collection = db.collection('taskslist');
 // Insert a document (row) into the collection
 const document = {
 id: 1,
 description: 'Online Session by 10.00 am',
 };
 const result = await collection.insertOne(document);

 console.log(`Inserted ${result.insertedCount} document(s)`);
 }
catch (error) {
 console.error('Error inserting data:', error);
 } }
// Function to retrieve data from MongoDB
async function retrieveData() {
 try {
 // Connect to the MongoDB server
 await client.connect();
 // Select the database
 const db = client.db(dbName);
 // Create a collection (table)
 const collection = db.collection('taskslist');
 // Find all documents in the collection
 const cursor = collection.find({id:1});
 // Iterate over the documents and print them
 await cursor.forEach(document => {
 console.log('Retrieved document:', document);
 });
 } catch (error) {
 console.error('Error retrieving data:', error);
 } finally {
 // Close the connection
 client.close();
 }
}
// Insert data into MongoDB
insertData();
// Retrieve data from MongoDB
retrieveData();