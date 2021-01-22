import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBarPage";
import youtube from "./api/youtubeApi";
import VideoList from "./components/VideoListPage";
import VideoDetails from "./components/VideoDetailsPage";
// import {row,col} from "bootstrap";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: "",
  };

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit("techinfoyt typecript");
  }

  onTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row yt">
            <h1 className="text-center col-md-12">
              <i class="fab fa-youtube-square"></i>
              &nbsp; Video Search Engine
            </h1>
          </div>
          <div className="row ">
            <div className="col-md-8 ">
              <SearchBar onFormSubmit={this.onTermSubmit} />
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="col-sm-4">
              <VideoList
                videos={this.state.videos}
                onSelectVideo={this.onSelectVideo}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
