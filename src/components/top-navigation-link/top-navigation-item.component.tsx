import * as classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface TopNavigationItemProps {
  url: string;
  text: string;
  disabled?: boolean;
}

const styles = require('./top-navigation-item.scss');

export const TopNavigationItem: React.StatelessComponent<TopNavigationItemProps> = props => (
  <div className={classNames(styles.item, {[styles.disabled]: props.disabled})}>
    {
      props.disabled
        ? <span className={classNames(styles.itemContent)}>{props.text}</span>
        : <Link className={styles.itemContent} to={props.url}>{props.text}</Link>
    }
  </div>
);
