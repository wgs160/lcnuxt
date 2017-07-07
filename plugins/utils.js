import jsCookie from 'js-cookie'
import jsAxios from './axios'
import jsQueryString from 'query-string'

export function isServerHttp (url,isServer) {
    if (isServer) {
        return 'http:' + url
    } else {
        return url
    }
}
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

export function hostname () {
    return ''
}

export function login () {
    if (getDevice() !== 'ios' && getDevice() !== 'android') {
        const href = location.href;
        const url = encodeURIComponent(`http://passport.czj100.com/wx/?referrer=${encodeURIComponent(href)}`)
        if (getDevice() === 'weixin') {
            location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3a4030fa04a8d5da&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo&state=com.kidswant.sp#wechat_redirect`
        } else {
            location.href = `//passport.czj100.com/?referrer=${encodeURIComponent(href)}`
        }
    } else {
        /* eslint-disable */
        // location.href = `${location.protocol}//${location.host}?cmd=login`
        location.href = `${hostname('www')}?cmd=login`
    }
}

export function ajax ({url, type, callback}) {
    const xhr = new XMLHttpRequest()
    xhr.open(type, url)
    xhr.send(null)
    xhr.onreadystatechange = () => {
        if ((xhr.readyState === 4) && (xhr.status === 200)) {
            const response = JSON.parse(xhr.responseText)
            callback(response)
        }
    }
}

export function checkLogin () {
    return new Promise((resolve, reject) => {
        const uid = jsCookie('uid')
        const skey = jsCookie('skey')
        ajax({
            url: `${hostname('user')}/user/CheckLogin?uid=${uid}&skey=${skey}`,
            type: 'get',
            callback(res) {
                if (res.errno === 0) {
                    resolve()
                } else {
                    reject()
                }
            }
        })
    })
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
