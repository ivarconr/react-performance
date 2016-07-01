var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="demo">
        I am a component with value={this.props.a}
      </div>
    );
  }
});