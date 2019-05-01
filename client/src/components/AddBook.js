import React from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getAuthorsQuery = gql`
{
    authors{
        name
        id
    }
}
`



class AddBook extends React.Component{
    constructor(props){
        super(props);
    }
    displayAuthors(){
        var data = this.props.data;
        if(data.loading){
            return( <option disabled>Loading authors</option> );
        } else {
            return data.authors.map(author => {
                return( <option key={ author.id } value={author.id}>{ author.name }</option> );
            });
        }
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
            <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select author</option>
                    { this.displayAuthors() }
                </select>
            </div>
            <button>+</button>

        </form>
        );
    }
  
}

export default graphql(getAuthorsQuery)(AddBook);
