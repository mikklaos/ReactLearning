import React, { Component } from "react";
import ReactDom from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

//Create component
//Has to show HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    const YOUTUBE_API_KEY = "AIzaSyBXESaeJ6Db8GwWO_H9MTmtQfOH8JjMZ40";
    YTSearch({ key: YOUTUBE_API_KEY, term: "surfboards" }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    if (!this.state.videos) return <div>Loading...</div>;
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => {
            this.setState({ selectedVideo });
          }}  videos={this.state.videos}
        />
      </div>
    );
  }
}
//Take this component and put it on the page
//in the dom
ReactDom.render(<App />, document.querySelector(".container"));
