import React, { useState, useEffect } from 'react';
import { Recommendation } from '../types';
import { getRecommendations, removeRecommendation } from '../services/RecommendationService';

import RecommendationsComponent from '../components/RecommendationsComponent';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>();

  useEffect(() => {
    (async () => {
      setRecommendations(await getRecommendations());
    })();
  }, [])
  
  const clearRecommendation = async (recommendationId: string) => {
    try {
      await removeRecommendation(recommendationId);
      setRecommendations(recommendations.filter(r => r._id != recommendationId));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <RecommendationsComponent 
      clearRecommendation={clearRecommendation}
      recommendations={recommendations} />
  );
}
export default Recommendations;
