import React, { useState, useEffect } from 'react';
import { Recommendation } from '../types';

import RecommendationsComponent from '../components/RecommendationsComponent';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>();

  useEffect(() => {
    setRecommendations([
      {
        profile: {
          id: 'jack.michaud',
          name: 'Jack'
        },
        track: {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/7u1Gfs98LSdZxescMkYeoH"
                },
                "href": "https://api.spotify.com/v1/artists/7u1Gfs98LSdZxescMkYeoH",
                "id": "7u1Gfs98LSdZxescMkYeoH",
                "name": "Akooos",
                "type": "artist",
                "uri": "spotify:artist:7u1Gfs98LSdZxescMkYeoH"
              }
            ],
            "available_markets": [
              "AD",
              "AE",
              "AR",
              "AT",
              "AU",
              "BE",
              "BG",
              "BH",
              "BO",
              "BR",
              "CA",
              "CH",
              "CL",
              "CO",
              "CR",
              "CY",
              "CZ",
              "DE",
              "DK",
              "DO",
              "DZ",
              "EC",
              "EE",
              "EG",
              "ES",
              "FI",
              "FR",
              "GB",
              "GR",
              "GT",
              "HK",
              "HN",
              "HU",
              "ID",
              "IE",
              "IL",
              "IN",
              "IS",
              "IT",
              "JO",
              "JP",
              "KW",
              "LB",
              "LI",
              "LT",
              "LU",
              "LV",
              "MA",
              "MC",
              "MT",
              "MX",
              "MY",
              "NI",
              "NL",
              "NO",
              "NZ",
              "OM",
              "PA",
              "PE",
              "PH",
              "PL",
              "PS",
              "PT",
              "PY",
              "QA",
              "RO",
              "SA",
              "SE",
              "SG",
              "SK",
              "SV",
              "TH",
              "TN",
              "TR",
              "TW",
              "US",
              "UY",
              "VN",
              "ZA"
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5B6mLZ4v2Jy33F2ibJDJoN"
            },
            "href": "https://api.spotify.com/v1/albums/5B6mLZ4v2Jy33F2ibJDJoN",
            "id": "5B6mLZ4v2Jy33F2ibJDJoN",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27389ebc3a81b60014d2494bf6d",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0289ebc3a81b60014d2494bf6d",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485189ebc3a81b60014d2494bf6d",
                "width": 64
              }
            ],
            "name": "Just Relax",
            "release_date": "2020-01-12",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:5B6mLZ4v2Jy33F2ibJDJoN"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7u1Gfs98LSdZxescMkYeoH"
              },
              "href": "https://api.spotify.com/v1/artists/7u1Gfs98LSdZxescMkYeoH",
              "id": "7u1Gfs98LSdZxescMkYeoH",
              "name": "Akooos",
              "type": "artist",
              "uri": "spotify:artist:7u1Gfs98LSdZxescMkYeoH"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "disc_number": 1,
          "duration_ms": 150308,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "QZFYX2052411"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2WNSGablCzfEjm8dt4EyZl"
          },
          "href": "https://api.spotify.com/v1/tracks/2WNSGablCzfEjm8dt4EyZl",
          "id": "2WNSGablCzfEjm8dt4EyZl",
          "is_local": false,
          "name": "Just Relax",
          "popularity": 37,
          "preview_url": "https://p.scdn.co/mp3-preview/45a0c8d41dacd13b3f9ba57b6403898024fc7820?cid=945afa41c50349b8bf8b2e35191d7e01",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:2WNSGablCzfEjm8dt4EyZl"
        },
      }
    ]);
  }, [])

  return (
    <RecommendationsComponent 
      recommendations={recommendations} />
  );
}
export default Recommendations;
