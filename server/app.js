const express = require('express')
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');
const cors = require('cors');



mongoose.connect('mongodb://gqlsampleapp:sa123456@ds147890.mlab.com:47890/gql-ninja')
mongoose.connection.once('open', ()=>{
    console.log("connected to database");
});

const app = express();

// allow cross origin requests
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(4000, () =>{
    console.log(`now listen for requests on port 4000`)
})