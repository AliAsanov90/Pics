import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = { span: 0 };
    this.imageRef = React.createRef();
  }
  
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const gridAutoRows = 10; // the value is the same as the value of "grid-auto-rows" property in CSS
    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / gridAutoRows) + 1; // number "1" in the end is a necessary additional span

    this.setState({ span });
  }

  render = () => {
    const { alt_description, description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <a href={urls.regular} target="_blank" rel="noopener noreferrer">
          <img ref={this.imageRef} alt={description} src={urls.regular} title={alt_description}/>
        </a>
      </div>
    );
  }
}

export default ImageCard;

