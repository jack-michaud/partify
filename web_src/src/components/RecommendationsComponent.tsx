import React from 'react';
import { Recommendation } from '../types';
import RecommendationListItem from './ReccomendationListItem';


interface IProps {
  recommendations: Recommendation[];
}
const RecommendationsComponent = (props: IProps) => {
  if (!props.recommendations) {
    return null;
  }
  return (
    <div>
      {
        props.recommendations.map(recommendation => (
          <RecommendationListItem 
            key={recommendation.id} 
            recommendation={recommendation} />
        ))
      }
    </div>
  );
}

export default RecommendationsComponent;
