

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

export async function getPlaylist(id: string): Promise<SpotifyApi.PlaylistObjectFull> {
  try {
    const resp = await fetch(`http://localhost:8080/playlists/${id}`);
    const data: SpotifyApi.PlaylistObjectFull = await resp.json();
    return data;
  } catch (e) {
    console.error(e);
    throw 'Failed to fetch playlist'
  }
}

function makeUrl(search: string): string {
    const result = `/playlists/?q="` + encodeURI(search) + `"&type=playlist`
    return result;
}
