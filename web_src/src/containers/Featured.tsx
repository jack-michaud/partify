import React, { useState, useEffect } from 'react';
import { Recommendation } from '../types';
import { getFeatured, removeFeatured } from '../services/FeaturedService';
import {isPromoterSelector} from '../store/profile/selectors';
import {useSelector} from 'react-redux';

import FeaturedComponent from '../components/FeaturedComponent';

const Featured = () => {
  const [featured, setFeatured] = useState<Recommendation[]>();
  const isPromoter = useSelector(isPromoterSelector);

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
      featured={featured}
      isPromoter={isPromoter}
    />
  );
}
export default Featured;
