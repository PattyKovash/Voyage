import React from 'react';
import AddEvent from './AddEvent.jsx';

const ViewEntry = (props) => {
  return (
    <div>
      <h4><a href={ props.event.url }>{ props.event.name }</a></h4>
      <img src={ props.event.image_url.replace('/o.jpg', '/m.jpg')} alt="" />
      <AddEvent
        param={ props.event }
        isSignedIn={ props.info.isSignedIn }
        action={ props.action }
        value={ props.value }
      />
    </div>
  );
};

export default ViewEntry;
