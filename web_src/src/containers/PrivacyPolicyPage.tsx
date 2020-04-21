import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-black m-12 p-5 flex flex-col justify-between max-w-4xl mx-auto">
      <span className="text-xl uppercase text-center italics font-semibold">
        Privacy Policy
      </span>
      <p className="p-5 leading-loose">
        Thanks for using Partify! We believe that the music you listen to is a private matter and we strive to give you the best possible experience while you use our service. Your privacy and security while using our site is of the utmost priority. Partify has the potential to help you find and share music, connect with friends, and meet new friends. We strive to achieve these goals while also protecting your privacy.
        <br/><br/>
        In order for you to be a member of the platform we need to have access to your Spotify account data, so we can view your public and private playlists. We do not look at any of your other Spotify data, or make any modifications to your Spotify account. We also do not share any of your Spotify data with third parties. Although you can view your private playlists on Partify, other users cannot see these playlists; other users can only see your public playlists. 
        <br/><br/>
        There is a variety of helpful data we collect in order to make our service run smoothly. This includes analytics about how many users use our platform and how frequently users recommend playlists to each other. Additionally, we identify which pages users visit the most so we can prioritize when improving the Partify user experience. 
        <br/><br/>
        In order for us to support this website we have to be able to monetize it. As such we allow promoters to pay to feature playlists. We also allow advertisements on the site. Promoted content is always marked as such; all playlists in the "Featured" section are promoted and all playlists in the "Search" section are not promoted and are not subject to preferential treatment. In order to provide a more personalized advertising experience we employ Google Analytics to allow our advertisers to better target their advertising based on demographic information.
        <br/><br/>
        We may make changes to this policy in the future. When we make substantial changes, we’ll provide a prominent notice on the home page of our website. Therefore, please make sure to read any such notice carefully.
        <br/><br/>
        Thank you for reading our privacy policy. If you have any questions or concerns about this policy, feel free to contact us at privacy@example.com.
        <br/><br/>
        We hope you enjoy using Partify!
      </p>
    </div>
  )
}

export default PrivacyPolicyPage;
