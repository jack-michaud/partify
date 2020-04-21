import React, { useState, useEffect } from 'react';
import PrivacyPopupComponent from '../components/PrivacyPopupComponent';

const hasApprovedPolicy = () =>
  Boolean(localStorage.getItem('approvedPolicy'));

const approvePolicy = () => {
  localStorage.setItem('approvedPolicy', 'true');
}

const PrivacyPopup = () => {
  // Show popup on mount
  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    if (!hasApprovedPolicy()) {
      setTimeout(() => {
        setShowFooter(true);
      }, 500);
    }
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  if (hasApprovedPolicy()) {
    return null;
  }
  return (
    <PrivacyPopupComponent
      togglePopup={() => setShowPopup(!showPopup)}
      showFooter={showFooter}
      approvePolicy={approvePolicy}
      showPopup={showPopup} />
  );
}

export default PrivacyPopup;
