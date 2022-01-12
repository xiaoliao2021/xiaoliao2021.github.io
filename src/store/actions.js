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
            console.log('this>>',resData)
            commit('setCatalogue', resData.root_catalogue)
        } else if (res.code === 201) {
            commit('setCatalogue', resData)
        } else {
            console.error(res)
        }
    })
}

export default {
    getUserInfo,
    getCatalogue
}
