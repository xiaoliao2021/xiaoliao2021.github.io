import github from "@utils/github.js";
import note from "@utils/note";
import { github_config } from "../hooks/config.js";

const getUserInfo = ({ state, commit }) => {
    github.getUserByName(github_config.login, (res) => {
        commit('setUserInfo', res.data)
    })
}

const getCatalogue = ({ state, commit }) => {
    note.getCatalogue(res => {
        const resData = res.data
        if (res.code === 200) {
            commit('setCatalogue', resData)
        } else if (res.code === 201) {
            commit('setCatalogue', resData)
        } else {
            console.error(res)
        }
    })
}

const getFileContent = ({ state, commit }, sha) => {
    if (!state.fileContentMap[sha]) {
        note.getContent(sha, res => {
            const resData = res.data
            if (res.code === 200) {
                console.log('hi', resData)
                commit('setFileContent', { sha, content: resData.content })
            }
        })
    }

}

export default {
    getUserInfo,
    getCatalogue,
    getFileContent
}
