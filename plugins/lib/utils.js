import jsCookie from 'js-cookie'
import jsAxios from './axios'
import jsQueryString from 'query-string'
import jsMd5 from 'md5'

export function getDevice() {
    if (process.env.VUE_ENV !== 'server') {
        const ua = navigator.userAgent
        const src = jsCookie('source')

        if (src === 'ios') {
            return 'ios'
        } else if (src === 'android') {
            return 'android'
        } else if (/MicroMessenger/i.test(ua)) {
            return 'weixin'
        } else if (/Mobile/i.test(ua)) {
            return 'mobile'
        }
    } else {
        return 'other'
    }
}

export function login () {
    location.href = '/login'
}

export async function appendLink ({url}) {
    const head = document.getElementsByTagName('head')[0],
        cssURL = url,
        linkTag = document.createElement('link');
    
    linkTag.id = 'dynamic-style';
    linkTag.href = cssURL;
    linkTag.setAttribute('rel','stylesheet');
    linkTag.setAttribute('media','all');
    linkTag.setAttribute('type','text/css');
    
    head.appendChild(linkTag);
}
export async function ensureLogin () {
    try {
        console.log('检测是否登录')
        const uid = jsCookie('uid')
        const skey = jsCookie('skey')
        if (uid && skey) {
            return {
                uid,
                skey
            }
        }
        login()
    } catch (e) {
        console.log(e)
    }
}
export const cookie = jsCookie
export const axios = jsAxios;
export const queryString = jsQueryString;
export const md5 = jsMd5;
