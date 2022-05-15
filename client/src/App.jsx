const mobilenet = require('@tensorflow-models/mobilenet');
import React, { useRef } from 'react';
import '@tensorflow/tfjs-backend-webgl';
import ModelLoadState from './components/ModelLoadState.jsx';
import IsPidgeon from './components/IsPidgeon.jsx';
import BirdList from './components/BirdList.jsx';
import ImageUrlForm from "./components/ImageUrlForm.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: null,
      imgUrl: null
    };
    this.imgRef = React.createRef();
    this.handleImageUrl = this.handleImageUrl.bind(this);
  }

  componentDidMount() {
    //This loads the machine learning model.
    mobilenet.load()
      .then(model => {
        this.setState({ model });
      })
  }

  handleImageUrl(imgUrl) {
    this.setState({ imgUrl })
  }

  pageRouter() {

  }

  render() {
    return (
      <div>
        <div className="navBar">
          <div className="nav">
            <span className="title">
              <img src="https://i.imgur.com/eXPeS9m.gif" height='100px' />
              <span className="title-text">
                <h3>Is this a Pidgeon?</h3>
              </span>
              <span className="nav-button">
                |
              </span>
              <span className="nav-button">
                Pidgeon Tester
              </span>
              <span className="nav-button">
                |
              </span>
              <span className="nav-button">
                Show Me My Birds
              </span>
            </span>
          </div>
          <ModelLoadState model={this.state.model} />
        </div>
        <div className="content">
          <ImageUrlForm handleImageUrl={this.handleImageUrl} />
          <IsPidgeon model={this.state.model} imgUrl={this.state.imgUrl} />
          <BirdList />
        </div>
      </div>

    );
  }
}

export default App;