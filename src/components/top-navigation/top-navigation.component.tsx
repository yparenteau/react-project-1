import * as React from 'react';
import { TopNavigationItem } from '../top-navigation-link/top-navigation-item.component';

const styles = require('./top-navigation.scss');

export const TopNavigation: React.StatelessComponent<{}> = props => (
  <div className={styles.topNavigation}>
    <TopNavigationItem url="/positions-and-exposures" text="Positions and exposures" />
    <TopNavigationItem url="/eligibility" text="Eligibility" disabled={true} />
    <TopNavigationItem url="/no-implemented" text="COP Projection" disabled={true} />
    <TopNavigationItem url="/no-implemented" text="Transactions" disabled={true} />
  </div>
);
