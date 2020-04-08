import React from 'react';

import { searchPlaylist } from '../services/PlaylistService';

import 'babel-polyfill';
import PlaylistListItem from './PlaylistListItem';

interface IProps {
  playlists: SpotifyApi.PlaylistObjectSimplified[];
  setSearchQuery: (q: string) => void;
  search: () => void;
}

class SearchPageComponent extends React.PureComponent<IProps> {
  render() {
    return (
      <div className="items-center flex flex-col text-purple-500">
        <span className="italic font-semibold text-4xl p-5">
          Search
        </span>
        <div className="px-3 flex flex-col">
          <input className="p-2 rounded text-center mb-1"
            type="text"
            id="search-input"
            placeholder="Search playlists..."
            onChange={(e) => this.props.setSearchQuery(e.target.value)} />
          <button type="submit" onClick={this.props.search}>
            Search Playlist
                  </button>
        </div>
        {
          this.props.playlists && this.props.playlists.length > 0 && this.props.playlists.map(playlist =>
            <li key={playlist.id}>
              <PlaylistListItem playlist={playlist} />
            </li>

          )
        }
      </div >
    )
  }

};

export default SearchPageComponent;
