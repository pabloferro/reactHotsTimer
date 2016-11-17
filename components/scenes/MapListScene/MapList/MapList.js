import React, { Component } from 'react';
import { ListView } from 'react-native';

import MapListItem from '../MapListItem/MapListItem';

export default class MapList extends Component {
  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.ds.cloneWithRows(this.props.maps)}
        renderRow={(map) =>
          <MapListItem
            name={map.PrimaryName.toUpperCase()}
            imageUrl={`http://d1i1jxrdh2kvwy.cloudfront.net/Images/Maps/${map.ImageURL}.png`}
          />
        }
      />
    );
  }
}

MapList.propTypes = {
  maps: React.PropTypes.arrayOf(React.PropTypes.shape({
    PrimaryName: React.PropTypes.string,
    ImageURL: React.PropTypes.string
  }))
};
