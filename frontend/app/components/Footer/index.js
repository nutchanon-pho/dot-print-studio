import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import LocaleToggle from 'containers/LocaleToggle';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#F9F7F4', marginTop: '60px', maxWidth: '100%' }}>
      <Grid stackable centered style={{ width: '100%' }}>
        <Grid.Row centered divided>
          <Grid.Column textAlign="center" width={4}>FOLLOW US <Icon name="facebook official" size="big" /> <Icon name="instagram" size="big" /> <Icon name="mail" size="big" /></Grid.Column>
          <Grid.Column textAlign="center" width={8} style={{ wordWrap: 'break-word' }}>
            <p>DOTPRINT.STUDIO@GMAIL.COM | 099-451-6619 / 089-131-8089 / 087-790-8867</p>
            <p>ADDRESS : 64(420/2) SOI PHRA NAKHARET, MAHA PHRUTTHARAM, BANG RAK, BKK 10500</p>
          </Grid.Column>
          <Grid.Column textAlign="center" width={2}>
            <LocaleToggle />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </footer>
  );
}

export default Footer;
