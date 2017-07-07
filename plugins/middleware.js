/**
 * Created by Administrator on 2017/7/7.
 */
import * as utils  from './utils'
export default function install(Vue) {
    Vue.prototype.$$axios = utils.axios
    Vue.prototype.$$getDevice = utils.getDevice
    Vue.prototype.$$cookie = utils.cookie
    Vue.prototype.$$queryString = utils.queryString
}