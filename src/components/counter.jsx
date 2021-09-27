import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // tags: ["tag1", "tag2", "tag3"],
  // };

  handleIncrement = (product) => {
    console.log("button Clicked", product);
    this.setState({ value: this.props.counter.value + 1 });
  };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p> There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag} </li>
  //       ))}
  //     </ul>
  //   );
  // }
  render(props)  {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
        <button
          // onClick={() => {
          //   this.handleIncrement({ id: this.props.counter.value + 1 });
          // }}
          onClick={()=>this.props.onIncrement(this.props.counter)}
          className="btn-primary"
        >
          Increment
        </button>
        <button
        onClick={()=>this.props.onDelete(this.props.counter.id)}
          // onClick={this.props.onDelete}
          className="btn-danger btn-sm m-2 btn-sm"
        >
          Delete
        </button>
        {/* <h1> Hello world</h1>
        {this.renderTags()} */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2  bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
