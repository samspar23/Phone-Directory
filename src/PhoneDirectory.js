import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubScribers from './ShowSubscribers';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [
                {
                    id: 1,
                    name: 'Sameer',
                    phone: '9999999999'
                }
            ]
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        let { subscribersList } = this.state;
        newSubscriber.id = subscribersList.length + 1;
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList });
    }

    deleteSubscriberHandler = (subscriberId) => {
        let { subscribersList } = this.state;
        subscribersList.splice(subscriberId - 1, 1);
        this.setState({ subscribersList });
    }

    render() {
        return (
            <Router>
                <div className="main-container">
                    <Route exact path='/' render={(props) => <ShowSubScribers {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} />} ></Route>
                    <Route exact path='/add' render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} ></Route>
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;