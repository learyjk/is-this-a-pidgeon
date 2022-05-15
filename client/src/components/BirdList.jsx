import React from 'react';
import BirdListEntry from './BirdListEntry.jsx';
import { sampleData } from '../sampleData.js';

class BirdList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birdList: []
    };
  }

  componentDidMount() {
    //console.table(sampleData);
    this.setState({ birdList: sampleData });
  }

  render() {

    return (
      <div>
        <h1>Pidgeon Tests</h1>
        <div className="bird-list">
          {this.state.birdList.map((bird, i) => {
            let keyVal = bird.id + i.toString()
            return <BirdListEntry key={keyVal} bird={bird} />
          })}
        </div>
      </div>
    )
  }
}

export default BirdList;