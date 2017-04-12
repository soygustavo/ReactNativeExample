import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicatorIOS,
  ProgressViewIOS,
} from 'react-native'
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.sate = { albums: [] };
  }

  componentWillMount() {
    console.log('componentWillMount in AlbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    if (this.state == null) {
      return <ProgressViewIOS 
               style={{
                 margin: 20,
                 width: 100
               }}
               progress={50 / 100}
               progressTintColor={"rgba(74,144,226,1)"} 
             />
    }
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}


export default AlbumList;
