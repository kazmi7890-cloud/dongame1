/*
 *
 * LeftMenu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import LeftMenuHeader from '../../components/LeftMenuHeader';
import LeftMenuLinkContainer from '../../components/LeftMenuLinkContainer';
import LeftMenuFooter from '../../components/LeftMenuFooter';
import Wrapper from './Wrapper';
import { SHOW_LEFT_MENU_HEADER, SHOW_LEFT_MENU_FOOTER,isEpitomeCoders} from '../../config';

const LeftMenu = ({ version, plugins }) => (
  <Wrapper>
    {(SHOW_LEFT_MENU_HEADER && isEpitomeCoders()) && <LeftMenuHeader />}
    <LeftMenuLinkContainer plugins={plugins} />
    {(SHOW_LEFT_MENU_FOOTER && isEpitomeCoders())&& <LeftMenuFooter key="footer" version={version} />}
  </Wrapper>
);

LeftMenu.propTypes = {
  version: PropTypes.string.isRequired,
  plugins: PropTypes.object.isRequired,
};

export default LeftMenu;
