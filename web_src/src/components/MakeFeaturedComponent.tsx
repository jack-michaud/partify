import React from 'react';

interface IProps {
  active: boolean;
  featuredSuccess: boolean;
  track: SpotifyApi.TrackObjectFull;
}
const MakeFeaturedComponent = (props: IProps) => {
  const message = props.featuredSuccess ? `Successfully featured ${props.track.name}!`
                : `Failed to feature ${props.track.name}!`;
  return (
    <div className={`${props.active ? ' ' : 'hidden'} w-full block my-5`}>
      {message}
    </div>
  )
}

export default MakeFeaturedComponent;
