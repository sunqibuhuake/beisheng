/**
 * Created by sunqi on 2018/5/28.
 */


import $ from 'jquery'
export default {
  slugHelper: {
    '颜色': {
      slug: 'yanse',
      style: 'normal',
      index: 0
    },
    '内存': {
      slug: 'neicun',
      style: 'long',
      index: 2
    },
    '服务': {
      slug: 'fuwu',
      style: 'normal',
      index: 1
    }
  },
  getImageSrc: (list) => {
    let src = '';
    list.forEach(l => {
      if (l.spec_name == '颜色') {
        try {
          src = l.spec_list[0].src;
        }catch(e) {
          console.log(e);
          src = ''
        }
      }
    })
    return src;
  },
  getDefaultSelectedInvoiceId: (list) => {

    // list 必须有普通发票,否则返回undefined
    let id = '';
    const arr = []
    list.forEach(l => {
      if (l.type == 1 || l.type == 0) {
        if (l.is_default == 1) {
          id = l.id;
        }
        arr.push(l)
      }
    })

    if (!id) {
      id = arr[0].id
    }

    return id;

  },
  propExist: (list, prop, key) => {
    let flag = false;
    list.forEach(l => {
      if (l[prop] && l[prop] == key) {
        flag = true;
      }
    })
    return flag;
  },
  add: (num1, num2) => {
    let sq1, sq2, m;
    try {
      sq1 = num1.toString().split(".")[1].length;
    }
    catch (e) {
      sq1 = 0;
    }
    try {
      sq2 = num2.toString().split(".")[1].length;
    }
    catch (e) {
      sq2 = 0;
    }
    m = Math.pow(10, Math.max(sq1, sq2));
    return (num1 * m + num2 * m) / m;
  },
  getSpecName: (options, list) => {

    const arr = []
    for (let prop in options) {
      const id = options[prop]
      list.forEach(l => {
        l.spec_list.forEach(_l => {
          if (_l.item_id == id) {
            arr.push({
              name: l.spec_name,
              value: _l.item
            })

          }
        })
      })
    }
    return arr;
  },
  installmentDetect: () => {
    const products = getProducts();

    if (products.list.length > 1) {
      return false
    }

    if (products.list.length == 0) {
      return false
    }

    if (products.list[0].count > 1) {
      return false
    }


    if (!products.list[0].payment || !products.list[0].payment) {
      return false
    }

    return true;
  },
  getSpecKey: (options) => {
    let arr = []
    let sortedArr = []
    for (let prop in options) {
      if ((prop !== 'payment') && (prop !== 'fenqi')) {
        arr.push(options[prop]);
      }
    }
    sortedArr = arr.sort((a, b) => {
      return a - b
    })

    const match_str = sortedArr.join('_');

    return match_str
  },
  getProducts: () => {
    return JSON.parse(window.localStorage.getItem('products'))
  },
  getSum: () => {
    let sum = 0;
    const products = getProducts();
    products.list.forEach(p => {
      sum += (p.price - 0 ) * (p.count - 0);
    })
    return sum;
  },
  getDiscount: () => {
    //return 0;
    let discount = 0;
    const products = getProducts();
    products.list.forEach(p => {
      discount += (p.discount - 0)* (p.count - 0);
    })
    return discount
  },

  moneyFormatter(m) {
    return  m + '.00'
    //const str = m + ''
    //if (str.match(/\./)) {
    //  return m
    //} else {
    //  return (m + '.00')
    //}
  },
  timestampToTime: (timestamp, flag) => {
    var date = new Date(timestamp * 1000);
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    const D = date.getDate() + ' ';

    const h = date.getHours() + ':';
    const m = date.getMinutes() + ':';
    const s = date.getSeconds();

    if (flag) {
      return Y + M + D + ' ' + h + m + s
    } else {
      return Y + M + D;
    }
  },
  insertBaiduShangQiao: (key) => {
    var _hmt = _hmt || [];
    (function(key) {
      var hm = document.createElement("script");
      hm.src = 'https://hm.baidu.com/hm.js?' + key;
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })(key);

    var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%" + key + "' type='text/javascript'%3E%3C/script%3E"))
  },
  logout: () => {
    window.localStorage.setItem('account','')
    window.localStorage.setItem('products','')
    window.location.href = '/'
  },
  clearProducts: ()=> {
    window.localStorage.setItem('products','');
  },
  openNewLink: (link) => {
    try{
      const a = $(`<a href='${link}' target='_blank' >test</a>`).get(0);
      var e = document.createEvent('MouseEvents');
      e.initEvent('click', true, true);
      a.dispatchEvent(e);
    } catch(e) {
      window.location.href = link;
    }
  },
  clearOrder: () => {
    window.localStorage.setItem('products', '');
  },
  getProducts: () => {
    try {
      return JSON.parse(window.localStorage.getItem('products'))
    }catch(e) {
      return false
    }
  },
  parseQuery(str) {
    const arr = str.split('');
    arr.shift();
    const query_arr = arr.join('').split('&');
    const result = {};
    query_arr.forEach(q => {
      result[q.split('=')[0]] = q.split('=')[1]
    })
    return result;
  }
}


function getProducts() {

  try {
    return JSON.parse(window.localStorage.getItem('products'))
  }catch(e) {
    return false
  }
}

