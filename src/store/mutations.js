const setUserInfo = (state, info) => {
    if (!info) return;
    state.userConfig = info
}
const setUserToken = (state, token) => {
    if (!token) return;
    state.userConfig.token = token
}
const setCatalogue = (state, { root_node, root_catalogue, catalogue_map }) => {
    if (root_node) state.filesTree = root_node;
    if (root_catalogue) state.catalogueTree = { ...state.catalogueTree, ...root_catalogue }
    if (catalogue_map) state.catalogueTree.catalogue_map = catalogue_map;
}
const setFileContent = (state, { sha, content }) => {
    if (sha) state.fileContentMap[sha] = content;
}
export default {
    setUserInfo,
    setCatalogue,
    setUserToken,
    setFileContent,
}