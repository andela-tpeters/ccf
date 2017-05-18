import React, { Component } from 'react';
import Comment from '../comment/Comment';
import './CommentList.css';


export default class CardList extends Component {
  render() {
    return (
      <div className="comment-list">
        <div className="new-comment-box">
          <input type="text" placeholder="Enter your comment here" className="form-control" />
        </div>

        <Comment userName={'Dolapo Olisa'} tempIcon={'D'} tempBgCol={'BB27DD'} />
        <Comment userName={'Linsey Graham'} tempIcon={'L'} tempBgCol={'4E92DF'} />
        <Comment userName={'Constance Okoghenun'} tempIcon={'C'} tempBgCol={'F3A537'} />
      </div>
    );
  }
}