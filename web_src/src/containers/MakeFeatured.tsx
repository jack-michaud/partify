import React, { useState, useEffect } from 'react';

import MakeFeaturedComponent from '../components/MakeFeaturedComponent';
import { makeFeatured } from '../services/FeaturedService';

const wait = (time: number /* ms */) => {
  return new Promise(res => {
    setTimeout(res, time);
  });
}

interface IProps {
  track: SpotifyApi.TrackObjectFull;
  resolve: Function;
}
const MakeFeatured = (props: IProps) => {
  const { track } = props;

  const [active, setActive] = useState<boolean>(false);
  const [featuredSuccess, setFeaturedSuccess] = useState<boolean>(false);

  // On mount, expand MakeFeatured component
  useEffect(() => {
    (async () => {
      setActive(true);
      try {
        await makeFeatured(track.id)
        setFeaturedSuccess(true);
      } catch (e) {
        setFeaturedSuccess(false);
        throw e;
      }
      // Collapse after 1.5s
      await wait(1500);
      setActive(false);
      await wait(100);
      props.resolve();
    })()
  }, []);

  return (
    <MakeFeaturedComponent
      featuredSuccess={featuredSuccess}
      active={active}
      track={track}/>
  )
}

export default MakeFeatured;
