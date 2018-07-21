/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'BS/LOGIN/CHANGE_USERNAME';
export const CHANGE_VERIFY_CODE = 'BS/LOGIN/CHANGE_VERIFY_CODE';
export const CLEAR_USERNAME = 'BS/LOGIN/CLEAR_USERNAME';
export const GET_VERIFY_CODE = 'BS/LOGIN/GET_VERIFY_CODE'
export const ENABLE_VERIFY_CODE_SENDING = 'BS/LOGIN/ENABLE_VERIFY_CODE_SENDING'
export const DISABLE_VERIFY_CODE_SENDING = 'BS/LOGIN/DISABLE_VERIFY_CODE_SENDING'
export const VERIFY_CODE_SUCCESS = 'BS/LOGIN/VERIFY_CODE_SUCCESS'
export const VERIFY_CODE_ERROR = 'BS/LOGIN/VERIFY_CODE_ERROR'

export const USERNAME_ERROR = 'BS/LOGIN/USERNAME_ERROR'

export const RESET_USERNAME = 'BS/LOGIN/RESET_USERNAME'
export const RESET_VERIFY_CODE_INPUT = 'BS/LOGIN/RESET_VERIFY_CODE_INPUT'


export const SHOW_QRCODE = 'BS/LOGIN/SHOW_QRCODE'
export const HIDE_QRCODE = 'BS/LOGIN/HIDE_QRCODE'
