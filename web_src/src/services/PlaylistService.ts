export async function searchPlaylist(query: string): Promise<SpotifyApi.PlaylistObjectSimplified[]> {
    // generates URLSearchParams
    var searchParams = new URLSearchParams();
    searchParams.set("q", encodeURI(query));
    searchParams.set("type", "playlist");
    // call API with full URL
    var fullURL: string = makeURL("/playlists/?", searchParams);
    const response = await http.get(fullURL);
    // extracts playlists from response
    const body: SpotifyApi.PlaylistSearchResponse = await response.json();
    let playlists: SpotifyApi.PlaylistObjectSimplified[] = body.playlists.items
    return playlists;
}

const http = {
    async get(url: string) {
        return await fetch(url);
    }
}

// Returns a full URL (Ex: http://localhost:8080/playlists/?q="hello"&type=playlist)
function makeURL(prefix: string, searchParams: URLSearchParams): string {
    return "http://localhost:8080" + prefix + searchParams.toString();
}