import React, { useState, useEffect } from 'react';
import { Recommendation } from '../types';
import { getFeatured, removeFeatured } from '../services/FeaturedService';

import FeaturedComponent from '../components/FeaturedComponent';

const Featured = () => {
  const [featured, setFeatured] = useState<Recommendation[]>();

  useEffect(() => {
    (async () => {
      setFeatured(await getFeatured());
    })();
  }, [])

  const clearFeatured = async (featuredId: string) => {
    try {
      await removeFeatured(featuredId);
      setFeatured(featured.filter(f => f._id != featuredId));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <FeaturedComponent
      clearFeatured={clearFeatured}
      featured={featured} />
  );
}
export default Featured;
