import React, { PureComponent } from 'react';

import styles from './Landing.css';

class LandingWithError extends PureComponent {
  render() {
    const { landing } = this.props;
    const result = landing && landing.result ? landing.result : null;

    if (result && result.size && result.size > 0) {
      return (
        <div className={styles.landingOutput}>
          <h1>This should catch by ErrorBoundary</h1>
          {result.something_not_existed.get('something_not_existed')}
        </div>
      );
    }
    return <div />;
  }
}

export default LandingWithError;
