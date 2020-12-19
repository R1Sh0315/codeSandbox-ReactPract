import React, { Component } from "react";

class List2 extends Component {
  listProp = {
    // tags:['tag1', 'tag2', 'tag3']
    tags: []
  };

  renderTag() {
    if (this.listProp.tags.length === 0) return <h2>List is empty</h2>;
    return (
      <ul>
        {this.listProp.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return <div>{this.renderTag()}</div>;
  }
}

export default List2;
