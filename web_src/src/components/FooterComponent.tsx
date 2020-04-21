import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FooterComponent = () => {

  return (
    <div className="h-24 bg-purple-900 p-3">
      <Link to="/privacy">
        Privacy Policy
      </Link>
    </div>
  )
}
export default FooterComponent;
