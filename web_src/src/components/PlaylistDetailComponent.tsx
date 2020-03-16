import React from 'react';

import 'babel-polyfill';

interface IProps {
    playlist: SpotifyApi.PlaylistObjectSimplified;
}

class PlaylistDetailComponent extends React.PureComponent<IProps> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className="text-purple-500" >
                <h1>{this.props.playlist.name}</h1>
                <h3>Owner: {this.props.playlist.owner.display_name}</h3>
                <img src={this.props.playlist.images[0].url} alt="" />
                <p>Playlist link: {this.props.playlist.external_urls.spotify}</p>
            </div>
        )
    }

};

export default PlaylistDetailComponent;
