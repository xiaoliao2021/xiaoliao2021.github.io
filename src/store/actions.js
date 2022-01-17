import github from "@utils/github.js";
import note from "@utils/note";
import { github_config } from "../hooks/config.js";

const getUserInfo = ({ state, commit}) => {
    github.getUser(github_config.login, (res) => {
        commit('setUserInfo', res.data)
    })
}

const getCatalogue = ({ state, commit }) => {
    note.getCatalogue(res => {
        const resData = res.data
        if(res.code === 200) {
            // console.log('this>>',resData)
            commit('setCatalogue', resData)
        } else if (res.code === 201) {
            commit('setCatalogue', resData)
            // console.log('this>>',resData)
        } else {
            console.error(res)
        }
    })
}

const getFileContent = ({ state, commit }, sha) => {
    note.getContent(sha, res => {
        const resData = res.data
        if(res.code === 200) {
            console.log('hi', resData)
        }
    })
}

export default {
    getUserInfo,
    getCatalogue,
    getFileContent
}
