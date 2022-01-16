const setUserInfo = (state, info) => {
    if(!info) return;
    state.userConfig = info
}

const setCatalogue = (state, {root_node, root_catalogue}) => {
    if(!root_node || !root_node) return;
    state.catalogueTree = {...state.catalogue, ...root_catalogue }
    state.filesTree = root_node
}
export default {
    setUserInfo,
    setCatalogue
}