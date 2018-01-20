import React from 'react';
import View from './View.jsx';
// import EatView from './EatView.jsx';
// import SleepView from './SleepView.jsx';
// import ExploreView from './ExploreView.jsx';

const Results = (props) => {
  return (
    <div>
      <div>
        <h2>Food & Drinks | { props.info.location }</h2>
        <View
          info={ props.info }
          category={ props.info.categories.restaurants }
          action={ props.action }
          value={'LIKE'}
        />

      </div>
      <hr/>
      <div>
        <h2>Accommodations | { props.info.location }</h2>
        <View
          info={ props.info }
          category={ props.info.categories.hotels }
          action={ props.deleteEventFromUser }
          value={'Delete'} />
      </div>
      <hr/>
      <div>
        <h2>Events | { props.info.location }</h2>
        <View
          info={ props.info }
          category={ props.info.categories.events }
          addEventToUser={ props.addEventToUser }
          deleteEventFromUser={ props.deleteEventFromUser }/>
      </div>
    </div>
  );
};

export default Results;

//   render() {
//     return (
//       <div>
//         <div>
//           <EatView
//             info={ this.props.info }
//             addEventToUser={ this.props.addEventToUser } />
//         </div>
//         <hr/>
//         <div>
//           <SleepView
//             info={ this.props.info }
//             addEventToUser={ this.props.addEventToUser } />
//         </div>
//         <hr/>
//         <div>
//           <ExploreView
//             info={ this.props.info }
//             addEventToUser={ this.props.addEventToUser } />
//         </div>
//         <div>
//           <h2>Food & Drinks!!! | { this.props.info.location }</h2>
//           <View
//             info={ this.props.info }
//             addEventToUser={ this.props.addEventToUser }
//             category={ this.props.info.categories.restaurants }
//           />
//         </div>
//       </div>
//     );
//   }
// }
