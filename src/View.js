import React from 'react';
import { Viewer } from 'react-pannellum';

const View = () => {
  return (
    <div>
      <div
        width="100%"
        height="500px"
        image="../images/Fashion.jpg"
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
        mouseZoom={false}
      />
    </div>
  );
};

export default View;
