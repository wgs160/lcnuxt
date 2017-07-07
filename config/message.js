export default {
    done(type, state = '成功') {
        return `${type}${state}`
    },
    undo(type, state = '成功') {
        return `取消${type}${state}`
    },
    post(type, state = '成功') {
        return `发表${type}${state}`
    },
    less(type) {
        return `已显示全部${type}`
    },
    error: '出错了哦, 请刷新重试~',
}
