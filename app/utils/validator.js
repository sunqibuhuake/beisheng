/**
 * Created by sunqi on 2018/6/9.
 */
export function addressValidator(form) {
  const helper = {
    consignee:{
      name: '收货人',
      action: '输入',
      type: 'string'
    },
    //province: {
    //  name: '省/直辖市',
    //  action: '选择',
    //  type: 'string'
    //},
    //city: {
    //  name: '城市',
    //  action: '选择',
    //  type: 'string'
    //},
    //district: {
    //  name: '区/县',
    //  action: '选择',
    //  type: 'string'
    //},
    address:{
      name: '地址',
      action: '输入',
      type: 'string',
    },
    mobile: {
      name: '手机号码',
      action: '输入',
      type: 'phone'
    }
  }
  return loop2verify(helper, form);
}

export function normalInvoiceValidator(form) {
  const helper = {
    invoice_title:{
      name: '发票抬头',
      action: '输入',
      type: 'string'
    },
    taxpayer: {
      name: '税号',
      action: '输入',
      type: 'string'
    }
  }
  return loop2verify(helper, form);
}
export function specInvoiceValidator(form) {
  const helper = {
    invoice_title:{
      name: '发票抬头',
      action: '输入',
      type: 'string'
    },
    taxpayer: {
      name: '税号',
      action: '输入',
      type: 'string'
    },
    regaddress:{
      name: '注册地址',
      action: '输入',
      type: 'string'
    },
    regmobile: {
      name: '注册电话',
      action: '输入',
      type: 'string'
    },
    kaihubank:{
      name: '开户银行',
      action: '输入',
      type: 'string'
    },
    bankacc: {
      name: '银行账户',
      action: '输入',
      type: 'string'
    }
  }
  return loop2verify(helper, form);
}


function loop2verify(helper, form) {
  const result = {}
  for (let prop in form) {
    if (helper[prop]) {
      const t = helper[prop];
      const v = form[prop]
      result[prop] = validator(v,t);
    }
  }
  let flag = true;
  for(let prop in result) {
    if (!result[prop].valid) {
      flag = false;
    }
  }
  return {pass: flag, valid: result}
}
function validator(v,t) {
  if (t.type == 'string') {
    return stringValidator(v,t)
  }

  if (t.type == 'phone') {
    return phoneValidator(v,t)
  }

}
function stringValidator(s, t) {
  if (s.trim() === '') {
    return {
      valid: false,
      msg: '请' + t.action + t.name
    }
  } else {
    return {
      valid: true
    }
  }
}
function phoneValidator(s, t) {

  if ((s + '').trim() === '') {
    return {
      valid: false,
      msg: '请' + t.action + t.name
    }
  }

  const reg = /^[1][0-9]{10}$/;

  if (reg.test(s)) {
    return {
      valid: true
    }
  } else {
    return {
      valid: false,
      msg: '请' + t.action + '正确的' + t.name
    }
  }

}






