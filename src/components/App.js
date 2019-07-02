import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImagesList from './ImagesList';

class App extends Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get(`/search/photos`, {
      params: { query: term }
    });

    this.setState({ images: response.data.results });

    // let imagesUrl = [];
    // response.data.results.forEach(img => imagesUrl.push(img.urls.regular));
    // const arr = response.data.results;
    // this.setState({ images: arr.forEach(img => this.state.images.push(img)) }));
    // console.log(this.state.images);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}

export default App;

