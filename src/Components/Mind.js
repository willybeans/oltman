import React, { Component } from 'react';
import MindItem from './MindItem';

class Mind extends Component {
    render() {
      let mindItems;
      if(this.props.mind) {
        mindItems = this.props.mind.map(mind => {
          return (
            <MindItem key={mind.id} mind={mind} />
          );
        });
      }
      return (
        <div className="Mind">
          {mindItems}
        </div>
      );
    }
}

export default Mind;
