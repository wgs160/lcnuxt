/**
 * Created by Administrator on 2017/4/12.
 */
import axios from '~plugins/axios'
import * as utils from '~plugins/utils'
import errorHandle from '~plugins/errorHandle'

export const state = () => ({
    data: {
        topics: [],
        page: 1,
        tab: 'all',
        limit: 20
    }
})

export const mutations = {
    // todo
    setTopics (state, {res}) {
        state.data.topics = res.data
    }
}

export const actions = {
    // todo
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
    }
}
