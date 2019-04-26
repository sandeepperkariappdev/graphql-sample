const graphql = require('graphql')
const _ = require('lodash');
 
const books =[  { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
{ name: 'The Final Empire', genre: 'Fantasy', id: '2' },
{ name: 'The Long Earth', genre: 'Sci-Fi', id: '3' }
]

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{type:BookType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                return _.find(books,{id:args.id})
                //args.id
                // code to get data from db / other source
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})

