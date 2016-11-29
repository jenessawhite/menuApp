// My first component
var menuApp = React.createClass({
  render: function() {
    console.log(this.state); // null
    return (
      <div>
        <h1>Hello. Welcome to Starboy </h1>
      </div>
    )
  }
});
