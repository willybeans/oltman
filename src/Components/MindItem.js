import React, { Component } from 'react';

class MindItem extends Component {

  render() {
    return (
      <li className="Mind_phrase">
        {this.props.mind.phrase}
      </li>
    );
  }
}
// ProjectItem.propTypes = {
//   project: React.PropTypes.object,
//   onDelete: React.PropTypes.func
// }

export default MindItem;
