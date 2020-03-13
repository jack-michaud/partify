import React from 'react';

import { searchPlaylist } from '../services/PlaylistService';
/// <reference path="../../node_modules/@types/spotify-api/spotify-api.d.ts" />

import 'babel-polyfill';
import PlaylistListItem from './PlaylistListItem';

interface IState {
    searchQuery: string;
    playlists: SpotifyApi.PlaylistObjectSimplified[];
}

class SearchPageComponent extends React.PureComponent<IState> {
    state = {
        searchQuery: "",
        playlists: new Array(0)
    }

    render() {
        return (
            <div className="text-purple-500" >
                <p>Hi :D</p>
                <input type="text" id="search-input" placeholder="Search playlists..." onChange={(e) => {
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
