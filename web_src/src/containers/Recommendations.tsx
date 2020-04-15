import React, { useState, useEffect } from 'react';
import { Recommendation } from '../types';
import { getRecommendations } from '../services/RecommendationService';

import RecommendationsComponent from '../components/RecommendationsComponent';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>();

  useEffect(() => {
    (async () => {
      setRecommendations(await getRecommendations());
    })();
  }, [])

  return (
    <RecommendationsComponent 
      recommendations={recommendations} />
  );
}
export default Recommendations;
