import React, { Component } from 'react';
import CorpseItem from './CorpseItem';

class Corpse extends Component {
    render() {
      let corpseItems;
      if(this.props.corpse) {
        corpseItems = this.props.corpse.map(corpse => {
          return (
            <CorpseItem key={corpse.id} corpse={corpse} />
          );
        });
      }
      return (
          <div className="Corpse">
            {corpseItems}
          </div>
      );
    }
}

export default Corpse;
