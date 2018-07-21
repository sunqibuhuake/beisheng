
import {
  CHANGE_USERNAME,
  CHANGE_VERIFY_CODE,

CLEAR_USERNAME,
GET_VERIFY_CODE,
VERIFY_CODE_ERROR,
VERIFY_CODE_SUCCESS,
ENABLE_VERIFY_CODE_SENDING,
DISABLE_VERIFY_CODE_SENDING,
USERNAME_ERROR,
RESET_USERNAME,
  RESET_VERIFY_CODE_INPUT,
SHOW_QRCODE,
HIDE_QRCODE
} from './constants';


export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}

export function usernameError(mes) {
  return {
    type: USERNAME_ERROR,
    mes
  }
}

export function verifyCodeError(mes) {
  return {
    type: VERIFY_CODE_ERROR,
    mes: mes
  }
}

export function changeCode(code) {
  return {
    type: CHANGE_VERIFY_CODE,
    code
  }
}
export function clearUsername() {
  return {
    type: CLEAR_USERNAME
  }
}

export function getVerifyCode() {

  return {
    type: GET_VERIFY_CODE
  }
}

export function getVerifyCodeSuccess() {
  return {
    type: VERIFY_CODE_SUCCESS
  }
}

//export function getVerifyCodeError() {
//  return {
//    type: VERIFY_CODE_ERROR,
//    mes
//
//  }
//}
export function enableVerifycodeSending() {
  return {
    type: ENABLE_VERIFY_CODE_SENDING
  }
}

export function disableVerifycodeSending(t) {
  return {
    type: DISABLE_VERIFY_CODE_SENDING,
    t
  }
}
export function resetUsername() {
  return {
    type: RESET_USERNAME
  }
}
export function resetVerifyCodeInput() {
  return {
    type: RESET_VERIFY_CODE_INPUT
  }
}




export function showQrcode() {
  return {
    type: SHOW_QRCODE
  }
}
export function hideQrcode() {
  return {
    type: HIDE_QRCODE
  }
}
