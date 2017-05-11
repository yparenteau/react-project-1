import * as React from 'react';

const styles = require('./exposure-navigation.scss');

interface Props {
  somethingList: any[];
}

export const ExposureNavigationComponent: React.StatelessComponent<Props> = props => (
  <div className={styles.exposureNavigation}>
    <div className={styles.selectContainer}>
      <h1>Something will appear here</h1>
    </div>
  </div>
);
