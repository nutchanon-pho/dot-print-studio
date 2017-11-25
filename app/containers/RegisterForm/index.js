/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React, { Component } from 'react';
import { Button, Grid, Form } from 'semantic-ui-react';

export default class RegisterForm extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid columns={1}>
        <Grid.Column>
          <Form>
            <Form.Field>
              <Form.Input label="EMAIL" type="email" />
            </Form.Field>
            <Form.Field>
              <Form.Input label="PASSWORD" type="password" />
            </Form.Field>
            <Form.Field>
              <Form.Input label="CONFIRM PASSWORD" type="password" />
            </Form.Field>
            <Form.Field>
              <Form.Input label="MOBILE PHONE" type="text" />
            </Form.Field>
            <Form.Field style={{ textAlign: 'center' }}>
              <Button type="submit">SUBMIT</Button>
            </Form.Field>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
