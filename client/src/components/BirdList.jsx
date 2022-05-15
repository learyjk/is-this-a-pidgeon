import React from 'react';
import BirdListEntry from './BirdListEntry.jsx';
import { sampleData } from '../sampleData.js';

import axios from 'axios';

class BirdList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birdList: []
    };
  }

  async getAllTests() {
    const response = await axios({
      method: 'get',
      url: '/api/tests',
    });
    console.log('get response: ', response)
    const birdList = response.data;
    this.setState({ birdList });
  }

  componentDidMount() {
    this.getAllTests();
  }

  render() {

    return (
      <div>
        <h1>Pidgeon Tests</h1>
        <div className="bird-list">
          {this.state.birdList.map((bird, i) => {
            return <BirdListEntry key={bird._id} bird={bird} />
          })}
        </div>
      </div>
    )
  }
}

export default BirdList;