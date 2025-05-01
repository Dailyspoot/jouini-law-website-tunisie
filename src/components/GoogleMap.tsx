
import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-[350px] bg-dark-light relative overflow-hidden rounded-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.6716546094984!2d10.179012!3d36.803738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd346425f8e1a7%3A0x6c9a7520a3a25038!2sTunis%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1558579560346!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
