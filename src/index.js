import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyCvJSPJeCuyCC43fqxq8vlzkfS9e2g0iyM';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('You and I');
  }

  onSelectVideo = selectedVideo => {
    this.setState({ selectedVideo });
  };

  videoSearch = term => {
    if (term === '' || term === ' ') term = 'You and I';
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  };

  render() {
    const videoSearch = _.debounce(this.videoSearch, 300);
    const logoURL =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUeoLkA69LmVBSQodNu0uVgAMfmZkAOHlwwdUGDn-XcfaRGW8vg';
    return (
      <div>
        <a href="localhost:8080">
          <img
            style={{
              position: 'absolute',
              top: '2',
              left: '10'
            }}
            width="90px"
            src={logoURL}
            alt="logo"
          />
        </a>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onSelectVideo={this.onSelectVideo}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
