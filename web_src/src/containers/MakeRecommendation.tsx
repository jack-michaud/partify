import React, { useState, useEffect } from 'react';

import MakeRecommendationComponent from '../components/MakeRecommendationComponent';
import { makeRecommendation } from '../services/RecommendationService';
import { getFriends } from '../services/UsersService';

const wait = (time: number /* ms */) => {
  return new Promise(res => {
    setTimeout(res, time);
  });
}

interface IProps {
  track: SpotifyApi.TrackObjectFull;
  resolve: Function;
}
const MakeRecommendation = (props: IProps) => {
  const { track } = props;

  const [userSearchResults, setUserSearchResults] = useState<{_id: string; name: string}[]>([]);
  const [active, setActive] = useState<boolean>(false);
  const [recommendationSuccess, setRecommendationSuccess] = useState<boolean>(false);

  // On mount, expand MakeRecommendation component
  // and get users
  useEffect(() => {
    (async () => {
      setActive(true);
      setUserSearchResults(await getFriends());
    })()
  }, []);


  const _makeRecommendation = async (userId: string) => {
    try {
      await makeRecommendation(track.id, userId)
      setRecommendationSuccess(true);
    } catch (e) {
      setRecommendationSuccess(false);
      throw e;
    }
    // Collapse after 1.5s
    await wait(1500);
    setActive(false);
    await wait(100);
    props.resolve();
  }

  return (
    <MakeRecommendationComponent
      makeRecommendation={_makeRecommendation}
      recommendationSuccess={recommendationSuccess}
      active={active}
      userSearchResults={userSearchResults}
      track={track}/>
  )
}

export default MakeRecommendation;
