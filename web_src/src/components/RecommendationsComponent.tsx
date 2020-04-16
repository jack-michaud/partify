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
      { props.recommendations.length == 0 && 
      <div className="text-center text-2xl font-bold py-2">
        No recommendations...
      </div> }
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
