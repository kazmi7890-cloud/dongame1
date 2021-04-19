import React, { memo } from 'react';
import { auth } from 'strapi-helper-plugin';
import { get, upperFirst } from 'lodash';

import { Block, Container } from './components';
const HomePage = ({ global: { plugins }, history: { push }}) => {
  return (
    <>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-12">
  <Block>Welcome {get(auth.getUserInfo(), 'username')} !</Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
