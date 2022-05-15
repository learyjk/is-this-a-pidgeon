import React from "react";

class ImageUrlForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value }, () => {
      this.props.handleImageUrl(this.state.value);
    });
  }

  render() {
    return (
      <form>
        <label>
          Image URL:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default ImageUrlForm