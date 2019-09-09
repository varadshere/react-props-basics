import React, { Component } from 'react';
import { render } from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail author="Sam" timeAgo="Today at 4:00 PM" 
          comment="How are you?" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <CommentDetail author="Bill" timeAgo="Today at 6:00 PM" 
        comment="I'm good!" avatar={faker.image.avatar()}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
