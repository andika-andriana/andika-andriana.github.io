import React from 'react';

export default class IframeC extends React.Component {
  render() {
    return (
      <div>
        <iframe
          src={this.props.src}
          height={this.props.height}
          width={this.props.width}
          title={this.props.title}
          style={{
            height: "90vh",
            display: "inline-block",
            margin: "0 auto"
          }}
        />
      </div>
    );
  }
}
