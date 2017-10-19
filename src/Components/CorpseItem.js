import React, { Component } from 'react';

class CorpseItem extends Component {

  render() {
    return (
      <li className="Corpse_phrase">
        {this.props.corpse.phrase}
      </li>
    );
  }
}
// ProjectItem.propTypes = {
//   project: React.PropTypes.object,
//   onDelete: React.PropTypes.func
// }

export default CorpseItem;
