/// <reference path="../../node_modules/@types/spotify-api/spotify-api.d.ts" />

export async function http(
    request: RequestInfo
): Promise<SpotifyApi.PlaylistObjectSimplified[]> {
    const url = "http://localhost:8080" + makeUrl(request);
    const response = await fetch(url);
    const body: SpotifyApi.PlaylistSearchResponse = await response.json();
    let playlists: SpotifyApi.PlaylistObjectSimplified[] = body.playlists.items
    return playlists;
}

export async function searchPlaylist(query: string): Promise<SpotifyApi.PlaylistObjectSimplified[]> {
    return await http(query);
}

function makeUrl(search: string): string {
    const result = `/playlists/?q="` + encodeURI(search) + `"&type=playlist`
    return result;
}