import React from 'react';

import { searchPlaylist } from '../services/PlaylistService';

import 'babel-polyfill';
import PlaylistListItem from './PlaylistListItem';

interface IState {
    searchQuery: string;
    playlists: SpotifyApi.PlaylistObjectSimplified[];
}

class SearchPageComponent extends React.PureComponent<{}, IState> {
    state = {
        searchQuery: "",
        playlists: new Array(0)
    }

    render() {
        return (
            <div className="items-center flex flex-col text-purple-500">
              <span className="italic font-semibold text-2xl">
                  Search 
              </span>
              <div className="px-3 flex flex-col">
                  <input className="p-2 rounded text-center mb-1"
                         type="text" id="search-input" placeholder="Search playlists..." onChange={(e) => {
                        this.setState({
                            searchQuery: e.target.value
                        });
                    }} />
                    <button type="submit" onClick={async () => {
                        const listy = await searchPlaylist(this.state.searchQuery);
                        this.setState({
                            playlists: listy
                        });
                    }}>Search Playlist</button>
                </div>
                {
                    this.state.playlists && this.state.playlists.length > 0 && this.state.playlists.map(playlist =>
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
