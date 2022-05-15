import React from 'react';

class IsPidgeon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: null,
    };
    this.imgRef = React.createRef();
    this.isPidgeonTest = this.isPidgeonTest.bind(this);
  }

  isPidgeonTest(image) {
    //This function tests an image to see if it is a pidgeon.
    this.props.model.classify(image.current)
      .then(predictions => {
        alert(predictions[0].className === 'partridge' ? 'This is a Pidgeon' : 'This is not a Pidgeon');
        alert(predictions[0].className === 'partridge' ? 'Pidgeon Confidence: ' + predictions[0].probability : '');
        //Yes I know a partridge is not a pidgeon,
        //but I keep feeding the model Pidgeons and they keep coming out as partridges???
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h1>Is this a Pidgeon?</h1>
        <div className="img-wrapper">
          <img
            src={this.props.imgUrl}
            ref={this.imgRef}
            alt="bird(?)"
            crossOrigin='anonymous'
            className="img"
          />
        </div>
        <button onClick={() => this.isPidgeonTest(this.imgRef)}>
          Test
        </button>
      </div>
    );
  }

}

export default IsPidgeon;