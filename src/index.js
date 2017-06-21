import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

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
    YTSearch({ key: API_KEY, term: 'Aye Watan song' }, videos => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  onSelectVideo = selectedVideo => {
    this.setState({ selectedVideo });
  };

  render() {
    console.log('vidoes', this.state.videos);
    return (
      <div>
        <SearchBar />
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
