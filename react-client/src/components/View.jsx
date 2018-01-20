import React from 'react';
import ViewEntry from './ViewEntry.jsx';

const View = (props) => {
  return (
    <div>
      {props.category.map(event =>
        <ViewEntry
          key={ event.id }
          event={ event }
          info={ props.info }
          action={ props.action }
          value={ props.value }
          param={ props.param }
        />
      )}
    </div>
  );
};

export default View;
