import React from 'react'
import Button from 'part:@sanity/components/buttons/default'
import styles from './index.css'

const NOW_DEPLOY_URL = "https://api.zeit.co/v1/integrations/deploy/QmPdp3UdEVPXr9PFHpNFmv7HvJs68uwhWpTXU7juXaAA1y/qFrczxKiII";

function NowDeploy() {
  const deploy = () => fetch(NOW_DEPLOY_URL);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Deploy</h2>
      </header>
      <div className={styles.footer}>
          <Button bleed color="primary" kind="simple" onClick={deploy}>
            Deploy Now
          </Button>
        </div>
    </div>
  );
}

export default {
  name: 'now-deploy',
  component: NowDeploy
}
