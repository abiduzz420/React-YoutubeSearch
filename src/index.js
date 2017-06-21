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
    const forkImgURL =
      'https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67';
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onSelectVideo={this.onSelectVideo}
          videos={this.state.videos}
        />
        <a href="https://github.com/abiduzz420/React-YoutubeSearch">
          <img
            style={{
              position: 'absolute',
              top: '20',
              left: '20'
            }}
            width="90px"
            src={logoURL}
            alt="logo"
          />
        </a>
        <a href="https://github.com/abiduzz420">
          <img
            style={{ position: 'absolute', top: '0', right: '0', border: '0' }}
            src={forkImgURL}
            alt="Fork me on GitHub"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"
          />
        </a>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
