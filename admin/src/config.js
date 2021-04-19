// DO NOT MODIFY THESE OPTIONS

// NOTE TO PLUGINS DEVELOPERS:
// If you modify this file you also need to update the documentation accordingly
// Here's the file: strapi/docs/3.0.0-beta.x/admin-panel/customization.md#tutorial-videos
// IF THE DOC IS NOT UPDATED THE PULL REQUEST WILL NOT BE MERGED

// IMPORTANT: It also needs to be added to the migration guide.

import { auth } from 'strapi-helper-plugin';
import { get, upperFirst } from 'lodash';

export function isEpitomeCoders(){
    const username = get(auth.getUserInfo(), 'username');
    console.log(username);
    return username == 'EpitomeCoders'
}


export const LOGIN_LOGO = null;
export const SHOW_TUTORIALS = true;
export const SETTINGS_BASE_URL = '/settings';

export const SHOW_LEFT_MENU_HEADER = true;
export const SHOW_LEFT_MENU_FOOTER = true;
export const SHOW_LEFT_MENU_PLUGINS = true;
export const SHOW_LEFT_MENU_GENERAL = true;
export const SHOW_LOGOUT_CREATE_ADMIN = true;
export const SHOW_HEADER_LOCALE_TOGGLE = true;
export const SHOW_AUTH_BRAND_IMAGE = true;


