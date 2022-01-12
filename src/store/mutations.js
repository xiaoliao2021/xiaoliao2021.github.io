const setUserInfo = (state, info) => {
    if(!info) return;
    state.userConfig = info
}

const setCatalogue = (state, content) => {
    if(!content) return;
    state.noteTree = {...state.catalogue, ...content }
}
export default {
    setUserInfo,
    setCatalogue
}