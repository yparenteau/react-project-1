import * as React from 'react';
import { Link } from 'react-router-dom';

const styles = require('./top-navigation.scss');

export class TopNavigationComponent extends React.Component<{}, void> {
  render() {
    return (
      <header className={styles.topNavigation}>
        <div className={styles.topNavigationItem}>
          <Link to="/positions-and-exposures" >Positions and exposures</Link>
        </div>
        <div className={styles.topNavigationItem}>
          <Link to="/eligibility">Eligibility</Link>
        </div>
        <div className={styles.topNavigationItem}>
          <Link to="/">COP Projection</Link>
        </div>
        <div className={styles.topNavigationItem}>
          <Link to="/">Transactions</Link>
        </div>
      </header>
    );
  }
}
