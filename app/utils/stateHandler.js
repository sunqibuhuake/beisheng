/**
 * Created by sunqi on 2018/6/7.
 */
import { fromJS } from 'immutable';
import helper from './helper'


export function resetInvoiceForm(state) {
  const form = state.getIn(['invoice', 'form']).toJS()
  const _form = {};
  for (let prop in form) {
    _form[prop] = ''
  }
  _form.is_default = 1;
  return state
    .setIn(['invoice', 'form'], fromJS(_form));
}
export function setInvoiceEditStatus(state, action) {
  /*
   * 当个人资料页编辑时
   * 当订单页点击修改时
   *
   * */
  const invoice_index = state.getIn(['invoice', 'list']).findIndex(item => {
    return item.toJS().id === action.id;
  });

  if (invoice_index == -1) {
    return console.log('invoice_index 查找出错')
  }

  const invoice_item = state.getIn(['invoice', 'list', invoice_index]).toJS();

  if (action && action.mode == 'order') {
    if (invoice_item.type == 1 || invoice_item.type == 0) {
      return state.setIn(['invoice', 'event', 'name'], 'edit')
        .setIn(['invoice', 'event', 'id'], action.id)
        .setIn(['invoice', 'modal', 'normal'], false)
        .setIn(['invoice', 'modal', 'spec'], false)
        .setIn(['invoice', 'modal', 'order_normal'], true)
        .setIn(['invoice', 'modal', 'order_spec'], false)
        .setIn(['invoice', 'modify'], action.id)
        .setIn(['invoice', 'form', 'invoice_title'], invoice_item.invoice_title)
        .setIn(['invoice', 'form', 'taxpayer'], invoice_item.taxpayer)
        .setIn(['invoice', 'form', 'is_default'], true)
    }
    if (invoice_item.type == 2) {
      return state.setIn(['invoice', 'event', 'name'], 'edit')
        .setIn(['invoice', 'event', 'id'], action.id)
        .setIn(['invoice', 'modal', 'normal'], false)
        .setIn(['invoice', 'modal', 'spec'], false)
        .setIn(['invoice', 'modal', 'order_normal'], false)
        .setIn(['invoice', 'modal', 'order_spec'], true)
        .setIn(['invoice', 'modify'], action.id)
        .setIn(['invoice', 'form', 'invoice_title'], invoice_item.invoice_title)
        .setIn(['invoice', 'form', 'taxpayer'], invoice_item.taxpayer)
        .setIn(['invoice', 'form', 'company'], invoice_item.company)
        .setIn(['invoice', 'form', 'regaddress'], invoice_item.regaddress)
        .setIn(['invoice', 'form', 'regmobile'], invoice_item.regmobile)
        .setIn(['invoice', 'form', 'kaihubank'], invoice_item.kaihubank)
        .setIn(['invoice', 'form', 'bankacc'], invoice_item.bankacc)
        .setIn(['invoice', 'form', 'is_default'], true)
    }
  } else {
    if (invoice_item.type == 1 || invoice_item.type == 0) {
      return state.setIn(['invoice', 'event', 'name'], 'edit')
        .setIn(['invoice', 'event', 'id'], action.id)
        .setIn(['invoice', 'modal', 'normal'], true)
        .setIn(['invoice', 'modal', 'spec'], false)
        .setIn(['invoice', 'modal', 'order_normal'], false)
        .setIn(['invoice', 'modal', 'order_spec'], false)
        .setIn(['invoice', 'form', 'invoice_title'], invoice_item.invoice_title)
        .setIn(['invoice', 'form', 'taxpayer'], invoice_item.taxpayer)
        .setIn(['invoice', 'form', 'is_default'], true)
    }
    if (invoice_item.type == 2) {
      return state.setIn(['invoice', 'event', 'name'], 'edit')
        .setIn(['invoice', 'event', 'id'], action.id)
        .setIn(['invoice', 'modal', 'normal'], false)
        .setIn(['invoice', 'modal', 'spec'], true)
        .setIn(['invoice', 'modal', 'order_normal'], false)
        .setIn(['invoice', 'modal', 'order_spec'], false)
        .setIn(['invoice', 'form', 'invoice_title'], invoice_item.invoice_title)
        .setIn(['invoice', 'form', 'taxpayer'], invoice_item.taxpayer)
        .setIn(['invoice', 'form', 'company'], invoice_item.company)
        .setIn(['invoice', 'form', 'regaddress'], invoice_item.regaddress)
        .setIn(['invoice', 'form', 'regmobile'], invoice_item.regmobile)
        .setIn(['invoice', 'form', 'kaihubank'], invoice_item.kaihubank)
        .setIn(['invoice', 'form', 'bankacc'], invoice_item.bankacc)
        .setIn(['invoice', 'form', 'is_default'], true)
    }
  }


}


export function resetInvoice(state, action) {
  const form = state.getIn(['invoice', 'form']).toJS()
  const _form = {};
  for (let prop in form) {
    _form[prop] = ''
  }
  _form.is_default = 1;
  return state
    .setIn(['invoice', 'event', 'name'], false)
    .setIn(['invoice', 'event', 'id'], false)
    .setIn(['invoice', 'modal', 'normal'], false)
    .setIn(['invoice', 'modal', 'order_normal'], false)
    .setIn(['invoice', 'modal', 'order_spec'], false)
    .setIn(['invoice', 'modal', 'spec'], false)
    .setIn(['invoice', 'form'], fromJS(_form));

}

export function setInvoiceType(state, action) {

  const list = state.getIn(['invoice', 'list']).toJS();
  let id = '';
  const arr = []
  if (action.type_num == 1) {
    list.forEach(l => {
      if (l.type == 1 || l.type == 0) {
        arr.push(l)
      }
    })
  } else {
    list.forEach(l => {
      if (l.type == 2) {
        arr.push(l);
      }
    })
  }

  const flag = helper.propExist(arr, 'is_default', 1);
  if (flag) {
    arr.forEach(l => {
      if (l.is_default == 1) {
        id = l.id;
      }
    })
  } else {
    try {
      id = arr[0].id
    } catch (e) {
      console.error('该类型无发票')
    }
  }

  return state
    .setIn(['invoice', 'selected', 'type'], action.type_num)
    .setIn(['invoice', 'selected', 'id'], id)
    .setIn(['invoice', 'modify'], id)

}

export function setInvoiceItem(state, action) {

  const invoice_index = state.getIn(['invoice', 'list']).findIndex(item => {
    return item.toJS().id === action.id;
  });
  console.log(invoice_index)

  const invoice_item = state.getIn(['invoice', 'list', invoice_index]).toJS();
  console.log(invoice_item)
  if (invoice_item.type == 1 || invoice_item.type == 0) {
    return state
      .setIn(['invoice', 'event'],fromJS({name: 'edit', id: action.id}))
      .setIn(['invoice', 'modify'], action.id)
      .setIn(['invoice', 'form', 'invoice_title'], invoice_item.invoice_title)
      .setIn(['invoice', 'form', 'taxpayer'], invoice_item.taxpayer)
      .setIn(['invoice', 'form', 'is_default'], 1);
  }
  if (invoice_item.type == 2) {
    return state
      .setIn(['invoice', 'event'],fromJS({name: 'edit', id: action.id}))
      .setIn(['invoice', 'modify'], action.id)
      .setIn(['invoice', 'form', 'invoice_title'], invoice_item.invoice_title)
      .setIn(['invoice', 'form', 'taxpayer'], invoice_item.taxpayer)
      .setIn(['invoice', 'form', 'company'], invoice_item.company)
      .setIn(['invoice', 'form', 'regaddress'], invoice_item.regaddress)
      .setIn(['invoice', 'form', 'regmobile'], invoice_item.regmobile)
      .setIn(['invoice', 'form', 'kaihubank'], invoice_item.kaihubank)
      .setIn(['invoice', 'form', 'bankacc'], invoice_item.bankacc)
      .setIn(['invoice', 'form', 'is_default'], 1);

  }

}
export function getInvoiceListSuccess(state, action) {


  if (action.mode && action.mode == 'order') {
    // 当在订单页保存订单时
    const list = state.getIn(['invoice', 'list']).toJS();
    let selectedId = state.getIn(['invoice', 'selected', 'id']);
    if (action.data.length > list.length) {
      action.data.forEach(l => {
        let _id = l.id;
        list.forEach(_l => {
          if (_l.id == _id) {
            _id = ''
          }
        })
        if (_id) {
          selectedId = _id;
        }
      })
    }
    return state.setIn(['invoice', 'ready'], true)
      .setIn(['invoice', 'error'], false)
      .setIn(['invoice', 'list'], fromJS(action.data))
      .setIn(['invoice', 'selected', 'id'], selectedId)
      .setIn(['invoice', 'modify'], selectedId);


  } else {
    // 当页面载入后加载完发票时
    const list = action.data;
    const id = helper.getDefaultSelectedInvoiceId(list)
    return state.setIn(['invoice', 'ready'], true)
      .setIn(['invoice', 'error'], false)
      .setIn(['invoice', 'list'], fromJS(action.data))
      .setIn(['invoice', 'selected', 'type'], 1)
      .setIn(['invoice', 'selected', 'id'], id)
      .setIn(['invoice', 'modify'], id);
  }

}
export function resetOrderInvoiceModify(state) {
  const id = state.getIn(['invoice', 'selected', 'id'])
  return state.setIn(['invoice', 'modify'], id);
}
export function setDefaultSelected(state) {
  const list = state.getIn(['invoice', 'list']).toJS();
  let id = '';
  list.forEach(l => {
    if (l.type == 1 || l.type == 0) {
      if (l.is_default == 1) {
        id = l.id;
      }
    }
  })
  return state.setIn(['invoice', 'modify'], id)

}
