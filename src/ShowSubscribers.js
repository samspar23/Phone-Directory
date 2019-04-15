import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css';
import { Link } from 'react-router-dom';

class ShowSubscribers extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     subscribersList: []
  //   };
  // }

  // componentDidMount() {
    
  // }

  render() {
      // let subscribers = [
      //   {
      //     id: 1,
      //     name: 'Sameer',
      //     phone: '1234567890'
      //   },
      //   {
      //     id: 2,
      //     name: 'qwerty',
      //     phone: '1111111111'
      //   }
      // ];

    return (
      <div>
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <Link to="/add">
            <button className="custom-btn add-btn">Add</button>
          </Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            this.props.subscribersList.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.deleteHandler.bind(this, sub.id)}>Delete</button>
                </span>
              </div>
            })
          }
        </div>
      </div>
    );
  }

  deleteHandler = (id) => {
    this.props.deleteSubscriberHandler(id);
  }
}

export default ShowSubscribers;
