import React, { Component } from 'react';
import { ajax } from 'jquery';
import PhotoCard from './PhotoCard.jsx';
import Arrows from './Arrows.jsx';

class PhotoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],

    };
  }

  componentDidMount() {
    ajax({
      type: 'GET',
      url: '/seeAllPhotos',
      success: (photos) => this.setState({ photos }),
      error: (error) => console.log('error', error),
    });
  }

  render() {
    const { photos } = this.state;
    return (
      <div className="carousel">
          <PhotoCard photos={photos} />
      </div>
    );
  }
}

export default PhotoCarousel;
