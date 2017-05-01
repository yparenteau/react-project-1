import * as React from 'react';

interface UselessLabelProps {
  text: string;
}

export class UselessLabel extends React.Component<UselessLabelProps, void> {
  render() {
    return (
      <h1>{this.props.text}</h1>
    );
  }
}
