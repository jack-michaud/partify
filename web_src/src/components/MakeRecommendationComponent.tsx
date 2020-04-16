import React from 'react';
import { Recommendation } from "../types";

interface IProps {
  makeRecommendation: (userId: string) => Promise<void>;
  active: boolean;
  recommendationSuccess: boolean;
  track: SpotifyApi.TrackObjectFull; 
  userSearchResults: { id: string, name: string }[]; 
}
const MakeRecommendationComponent = (props: IProps) => {
  return (
    <div className={`${props.active ? ' ' : 'hidden'} w-full block`}>
      <button onClick={() => props.makeRecommendation('jack.michaud')}>
        Click to recommend { props.track.name } to jack.michaud
      </button>
    </div>
  )
}

export default MakeRecommendationComponent;
