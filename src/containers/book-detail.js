import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render(){
    if(!this.props.book){
      return <div>Select a book to get started.</div>
    }
    return(
      <div>
        <h3>Details for:</h3>
        <div>Title: <b>{this.props.book.title}</b></div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

// Can now make use of this.props.book
function mapStateToProps(state){
  return{
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
