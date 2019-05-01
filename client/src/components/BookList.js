import React from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getBooksQuery = gql`
{
    books{
        name
        id
    }
}
`


class BookList extends React.Component{
    constructor(props){
        super(props);
    }
    displayBooks(){
        var data = this.props.data;
        if(data.loading){
            return(<div>Loading books..</div>)
        } else{
            return data.books.map(book => {
                return(
                    <li>{book.name}</li>
                )
            })
        }
    }
    render(){
        console.log("this.props"+ this.props);

        return (
            <div className="App">
                <h1> Book list</h1>
                {this.displayBooks()}
            </div>
        );
    }
  
}

export default graphql(getBooksQuery)(BookList);
