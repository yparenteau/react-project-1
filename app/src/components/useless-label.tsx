import * as React from 'react';

const { useLessLabel } = require('./useless-label.scss');

interface UselessLabelProps {
  text: string;
}

export class UselessLabel extends React.Component<UselessLabelProps, void> {
  render() {
    return (
      <div className={`${useLessLabel} use-less`}>{this.props.text}</div>
    );
  }
}
