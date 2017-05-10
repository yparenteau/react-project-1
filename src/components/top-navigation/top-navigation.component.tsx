import * as React from 'react';
import TopNavigationItemComponent from '../top-navigation-link/top-navigation-item.component';

const styles = require('./top-navigation.scss');

export class TopNavigationComponent extends React.Component<{}, void> {
  render() {
    return (
      <div className={styles.topNavigation}>
        <TopNavigationItemComponent url="/positions-and-exposures" text="Positions and exposures" />
        <TopNavigationItemComponent url="/eligibility" text="Eligibility" disabled={true} />
        <TopNavigationItemComponent url="/no-implemented" text="COP Projection" disabled={true} />
        <TopNavigationItemComponent url="/no-implemented" text="Transactions" disabled={true} />
      </div>
    );
  }
}
