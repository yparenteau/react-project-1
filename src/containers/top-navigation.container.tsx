import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import { TopNavigationComponent } from '../components/top-navigation/top-navigation.component';

export class TopNavigationContainer extends React.Component<{}, void> {
  render() {
    return (
      <TopNavigationComponent />
    );
  }
}

const mapStateToProps = (state: RootState): Partial<{}> => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNavigationContainer);
