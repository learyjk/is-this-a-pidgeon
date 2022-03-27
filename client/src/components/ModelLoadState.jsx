import React from 'react';

const ModelLoadState = (props) => {
  return (
    <div className="load-state-wrapper">
      <div className="model-status">
        {props.model ? <h4>Model has Loaded!</h4> : <h4>Loading Model...</h4>}
      </div>
    </div>
  );
}

export default ModelLoadState;