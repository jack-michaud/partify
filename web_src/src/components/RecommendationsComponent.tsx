import React from 'react';
import { Recommendation } from '../types';
import RecommendationListItem from './ReccomendationListItem';


interface IProps {
  clearRecommendation: (rId: string) => Promise<void>;
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
            clearRecommendation={props.clearRecommendation}
            key={recommendation._id} 
            recommendation={recommendation} />
        ))
      }
    </div>
  );
}

export default RecommendationsComponent;
