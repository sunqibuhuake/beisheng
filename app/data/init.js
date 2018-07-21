/**
 * Created by sunqi on 2018/5/29.
 */
import parse from '../utils/parse'
import prov_list from './prov_list'
export default {
  loading: false,
  error: false,
  info: {
    data: false,
    form: {
      nickname: '',
      mobile: '',
      job: '',
      head_pic: ''
    },
    modal: false
  },
  payment: {
    ready: false,
    error: false,
    selected: {
      id: 'kq'
    },
    list: []
  },
  delivery: {
    ready: false,
    error: false,
    list: [],
    seller_address_id: '',
    options: false,
    id: 1
  },
  order: {
    sn: '',
    mark: '',
    coupon: {
      id: 0,
      money: 0
    },
    processing: false
  },
  address: {
    processing: false,
    ready: false,
    error: false,
    loading: false,
    valid: {
      pass: true
    },
    modal: false,
    detele: false,
    list: [],
    form: {
      province: {
        value: '',
        list: parse.convertRegionList(prov_list)
      },
      city: {
        value: '',
        list: []
      },
      district: {
        value: '',
        list: []
      },
      address: '',
      mobile: '',
      consignee: '',
      is_default: true,
      id: ''
    },
    event: {
      name: false,
      id: false
    },
    selected: ''
  },
  invoice: {
    ask4invoice: false,
    processing: false,
    ready: false,
    error: false,
    type: false,
    valid: {
      pass: true
    },
    modify: '',
    selected: {
      type: 1,
      id: 1
    },
    event: {
      name: false,
      id: false
    },
    modal: {
      normal: false,
      spec: false
    },
    list: [],
    form: {
      invoice_title: '',
      taxpayer: '',
      company: '',
      regaddress: '',
      regmobile: '',
      kaihubank: '',
      bankacc: '',
      token: '',
      is_default: '',
      head_pic: '',
      type: ''
    }
  },
  modals_status: {
    address: false
  },
  regions: {
    prov: {
      value: 1,
      options: []
    },
    city: {
      value: false,
      options: []
    },
    district: {
      value: false,
      options: []
    }
  },
  test: {
    value: 1,
    input:'',
    list: [
      {
        name: 'aaa',
        value: 2222
      },
      {
        name: 'bbb',
        value: 333
      },
      {
        name: 'ccc',
        value: 444
      }
    ]
  },
  aftermarket: {
    apply: {
      form: {
        reason: {
          error: '',
          value: ''
        },
        id: {
          value: ''
        },
        desc: {
          value: ''
        },
        images: {
          list: []
        }
      }
    }
  },
  account: {
    ready: false,
    data: {}
  },
  cart: {
    ready: false,
    data: [],
    modify_count: {
      id: '',
      count: '',
      spec_key: ''
    }
  },
  currentUser: false,
  userData: {
    repositories: false,
  },
  search: {
    ready: false,
    key: '',
    result: [],
    pagination: {
      index: 1,
      total: 1
    }
  },
  pagination: {
    index: 1,
    total: 1
  }
}
