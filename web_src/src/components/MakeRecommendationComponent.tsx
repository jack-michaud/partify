import React from 'react';
import { Recommendation } from "../types";

interface IProps {
  makeRecommendation: (userId: string) => Promise<void>;
  active: boolean;
  recommendationSuccess: boolean;
  track: SpotifyApi.TrackObjectFull; 
  userSearchResults: { _id: string, name: string }[]; 
}
const MakeRecommendationComponent = (props: IProps) => {
  return (
    <div className={`${props.active ? ' ' : 'hidden'} w-full block my-5`}>
      { props.recommendationSuccess && 
      <div>
        Successfully recommended { props.track.name }!
      </div> }
      
      {
        !props.recommendationSuccess && props.userSearchResults.map( user => (
          <div key={user._id} className="block">
            <button onClick={() => props.makeRecommendation(user._id)}>
              Click to recommend <span className="underline">{ props.track.name }</span> to { user.name }
            </button>
          </div>
        ))
      }
    </div>
  )
}

export default MakeRecommendationComponent;
