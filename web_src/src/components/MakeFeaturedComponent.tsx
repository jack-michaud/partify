import React from 'react';

interface IProps {
  active: boolean;
  featuredSuccess: boolean;
  track: SpotifyApi.TrackObjectFull;
}
const MakeFeaturedComponent = (props: IProps) => {
  return (
    <div className={`${props.active ? ' ' : 'hidden'} w-full block my-5`}>
      { props.featuredSuccess &&
      <div>
        Successfully featured { props.track.name }!
      </div> }
      { !props.featuredSuccess &&
        <div>
          Failed to feature { props.track.name }!
        </div> }
    </div>
  )
}

export default MakeFeaturedComponent;
