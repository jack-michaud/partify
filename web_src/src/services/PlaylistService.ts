
export async function searchPlaylist(query: string): Promise<SpotifyApi.PlaylistObjectSimplified[]> {
  // generates URLSearchParams
  var searchParams = new URLSearchParams();
  searchParams.set("q", query);
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

export async function getPlaylist(id: string): Promise<SpotifyApi.PlaylistObjectFull> {
  try {
    const resp = await http.get(makeURL(`/playlists/${id}`, new URLSearchParams()));
    const data: SpotifyApi.PlaylistObjectFull = await resp.json();
    return data;
  } catch (e) {
    console.error(e);
    throw 'Failed to fetch playlist'
  }
}

// Returns a full URL (Ex: http://localhost:8080/playlists/?q="hello"&type=playlist)
function makeURL(prefix: string, searchParams: URLSearchParams): string {
  return "https://partify-backend-src.herokuapp.com" + prefix + searchParams.toString();
}
