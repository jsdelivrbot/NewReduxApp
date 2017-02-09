import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return(
        <li className="list-group-item" key={book.title}>{book.title}</li>
      )
    })
  }
  renderPeople(){
    return this.props.people.map((person) => {
      console.log(person);
      return(
        <li className="list-group-item" key={person.user.name}>{person.user.name} | Age: {person.user.age}</li>
      )
    })
  }

  render(){
    return(
      <div>
        <ul className="list-group col-xs-4">
          {this.renderList()}
        </ul>
        <ul className="list-group col-xs-8">
          {this.renderPeople()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  //takes state and turns it to props
  return{
    books: state.books,
    people: state.people
  };
}

export default connect(mapStateToProps)(BookList);
