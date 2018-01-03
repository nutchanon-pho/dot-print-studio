/**
 *
 * PurchaseHistoryDetail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Segment, Header, Card, Grid, Step, Icon, Image } from 'semantic-ui-react';

// import messages from './messages';

export class PurchaseHistoryDetail extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Segment basic>
        <Header as="h1">
          รายละอียดคำสั่งซื้อ
        </Header>
        <Card fluid>
          <Card.Content>
            <Grid columns={3}>
              <Grid.Column>
                Order Number #{this.props.match.params.id}
              </Grid.Column>
              <Grid.Column textAlign="center">
                สั่งเมื่อวันที่ 29/08/17
              </Grid.Column>
              <Grid.Column textAlign="right">
                ยอดรวม: 150 บาท
              </Grid.Column>
            </Grid>
          </Card.Content>
        </Card>
        <Step.Group fluid>
          <Step active>
            <Icon name="wait" />
            <Step.Content>
              <Step.Description>กำลังดำเนินการ</Step.Description>
            </Step.Content>
          </Step>
          <Step>
            <Icon name="truck" />
            <Step.Content>
              <Step.Description>กำลังจัดส่ง</Step.Description>
            </Step.Content>
          </Step>
          <Step>
            <Icon name="checkmark box" />
            <Step.Content>
              <Step.Description>เสร็จสิ้น</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
        <Header as="h1">
          รายละอียดสินค้า
        </Header>
        <Grid>
          <Grid.Row stretched>
            <Grid.Column width="6"><Image size="medium" centered src="https://picsum.photos/600/400?image=0" /></Grid.Column>
            <Grid.Column width="10">
              <Card fluid>
                <Card.Content>
                  <Card.Header>A3 Poster</Card.Header>
                  <Card.Description>
                    <p>ราคา 100 บาท</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stretched>
            <Grid.Column width="6"><Image size="medium" centered src="https://picsum.photos/600/600" /></Grid.Column>
            <Grid.Column width="10">
              <Card fluid>
                <Card.Content>
                  <Card.Header>A4 Poster</Card.Header>
                  <Card.Description>
                    <p>ราคา 50 บาท</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid stretched stackable>
          <Grid.Column computer="4">
            <Card fluid>
              <Card.Content>
                <Card.Header>ที่อยู่ในการจัดส่งสินค้า</Card.Header>
                <Card.Description>
                  <p>ณัฐชนน โพธิ์เงิน</p>
                  <p>222/104 หมู่ 2เดอะซิตี้ พระราม 5 - ราชพฤกษ์ (ฝั่งมหาวิทยาลัยราชพฤกษ์) ต.บางขุนกอง อ.บางกรวยนนทบุรี 11130, นนทบุรี/ Nonthaburi-บางกรวย/ Bang Kruai-11130</p>
                  <p>814804553</p>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column computer="4">
            <Card fluid>
              <Card.Content>
                <Card.Header>ที่อยู่ในการออกใบกำกับภาษี</Card.Header>
                <Card.Description>
                  <p>ณัฐชนน โพธิ์เงิน</p>
                  <p>222/104 หมู่ 2เดอะซิตี้ พระราม 5 - ราชพฤกษ์ (ฝั่งมหาวิทยาลัยราชพฤกษ์) ต.บางขุนกอง อ.บางกรวยนนทบุรี 11130, นนทบุรี/ Nonthaburi-บางกรวย/ Bang Kruai-11130</p>
                  <p>814804553</p>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column computer="8">
            <Card fluid>
              <Card.Content>
                <Card.Header>สรุปค่าใช้จ่าย</Card.Header>
                <Card.Description>
                  <Grid columns={2}>
                    <Grid.Column>
                      <div>มูลค่าสินค้า</div>
                      <div>ค่าจัดส่ง</div>
                      <div>ส่วนลด</div>
                    </Grid.Column>
                    <Grid.Column textAlign="right">
                      <div>150 บาท</div>
                      <div>0 บาท</div>
                      <div>0 บาท</div>
                    </Grid.Column>
                  </Grid>
                  <hr />
                  <Grid columns={2}>
                    <Grid.Column>
                      <div>ราคาสุทธิ (รวม VAT)</div>
                    </Grid.Column>
                    <Grid.Column textAlign="right">
                      <div>150 บาท</div>
                    </Grid.Column>
                  </Grid>
                </Card.Description>
              </Card.Content>
            </Card></Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

PurchaseHistoryDetail.propTypes = {
  match: PropTypes.object,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(PurchaseHistoryDetail);
