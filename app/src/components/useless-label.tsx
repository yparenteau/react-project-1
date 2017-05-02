import * as React from 'react';

const { useLess } = require('../../assets/sass/useless-label.scss');

interface UselessLabelProps {
  text: string;
}

export class UselessLabel extends React.Component<UselessLabelProps, void> {
  render() {
    return (
      <div className={`${useLess} use-less`}>{this.props.text}</div>
    );
  }
}
