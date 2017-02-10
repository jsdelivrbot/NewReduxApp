import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return(
        <li
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
          key={book.title}
          >{book.title}</li>
      )
    })
  }

  render(){
    return(
      <div>
        <ul className="list-group col-xs-4">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  //takes state and turns it to props
  return{
    books: state.books
  };
}

// Anything returned will end up as props on the BookList container
function mapDispatchToProps(dispatch){
  // Whenever selectBook is called, result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
  // this returns this.props.selectBook
}

// Promote BookList from Component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
