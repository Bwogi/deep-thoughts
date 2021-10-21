// import the gql tagged template function
const { gql } = require('apollo-server-express')

// create type definitions
const typeDefs = gql`
type Query{
    helloWorld: String
}`;


// export the type definitions
module.exports = typeDefs;