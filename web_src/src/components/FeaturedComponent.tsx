import React from 'react';
import { Recommendation } from '../types';
import FeaturedListItem from './FeaturedListItem';


interface IProps {
  clearFeatured: (fId: string) => Promise<void>;
  featured: Recommendation[];
}
const FeaturedComponent = (props: IProps) => {
  if (!props.featured) {
    return null;
  }
  console.log('The featured are ', props.featured);
  return (
    <div>
      { props.featured.length == 0 &&
      <div className="text-center text-2xl font-bold py-2">
        No featured songs...
      </div> }
      {
        props.featured.map(f => (
          <FeaturedListItem
            clearFeatured={props.clearFeatured}
            key={f._id}
            featured={f} />
        ))
      }
    </div>
  );
}

export default FeaturedComponent;
