import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import { ExposureNavigation } from '../components/exposure-navigation/exposure-navigation.component';

interface PositionsAndExposuresProps  {
  somethingList: any[];
}

const Container: React.StatelessComponent<PositionsAndExposuresProps> = props => (
  <div>
    <ExposureNavigation {...props} />
  </div>
);

const mapStateToProps = (state: RootState): Partial<PositionsAndExposuresProps> => ({
  somethingList: [
    {label: 'Choice 1', value: '1'},
    {label: 'Choice 2', value: '2'},
    {label: 'Verrrryyy looooooooooooooooooooooooong Choice 3', value: '3'},
  ]
});

const mapDispatchToProps = {
};

export const PositionsAndExposuresContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
