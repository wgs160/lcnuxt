/**
 * Created by Administrator on 2017/7/7.
 */
import SimpleMDE from 'simplemde'
import * as utils  from './utils'
export default function install(Vue) {
    Vue.prototype.$$axios = utils.axios
    Vue.prototype.$$cookie = utils.cookie
    Vue.prototype.$$md5 = utils.md5
    Vue.prototype.$$queryString = utils.queryString
    Vue.prototype.$$SimpleMDE = (obj) => {
        return new SimpleMDE(obj)
    }
}