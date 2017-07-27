/**
 * Created by Administrator on 2017/4/12.
 */
import axios from '~plugins/lib/axios'
import errorHandle from '~plugins/lib/errorHandle'

export const state = () => ({
    topics: {
        topics: [],
        page: 1,
        tab: 'all',
        limit: 20
    },
    topicsDetail: {
        content: '',
        title: ''
    }
})

export const mutations = {
    // todo
    setTopics (state, {res}) {
        state.topics.topics = res.data
    },
    // todo
    setTopicsDetail (state, {res}) {
        state.topicsDetail = res.data
    }
}

export const actions = {
    // todo
    // 文章列表
    async topics ({commit}, {error}) {
        try {
            const response = await axios.get('/api/cnode/topics')
            const res = response.data
            if (res.success) {
                commit('setTopics', {res})
            } else {
                error({statusCode: response.status, message: response.statusText})
            }
        } catch (e) {
            errorHandle(e,error)
        }
    },
    // 文章详情
    async topics_detail ({commit}, {id, error}) {
        try {
            const response = await axios.get(`/api/cnode/topic/${id}`)
            const res = response.data
            if (res.success) {
                commit('setTopicsDetail', {res})
            } else {
                error({statusCode: response.status, message: response.statusText})
            }
        } catch (e) {
            errorHandle(e,error)
        }
    }
}
