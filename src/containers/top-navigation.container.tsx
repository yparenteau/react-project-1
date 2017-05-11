import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import { TopNavigationComponent } from '../components/top-navigation/top-navigation.component';

const Container: React.StatelessComponent<{}> = props => (
  <TopNavigationComponent />
);

const mapStateToProps = (state: RootState): Partial<{}> => ({
});

const mapDispatchToProps = {
};

export const TopNavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
