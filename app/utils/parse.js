/**
 * Created by sunqi on 2018/5/31.
 */
export default {
  convertRegionList: (list) => list.map( l => {
    l.value = l.id;
    return l;
  })
}
