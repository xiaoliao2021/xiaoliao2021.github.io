const setUserInfo = (state, info) => {
    if (!info) return;
    state.userConfig = info
}

const setCatalogue = (state, { root_node, root_catalogue, catalogue_map }) => {
    if (root_node) state.filesTree = root_node;
    if (root_catalogue) state.catalogueTree = { ...state.catalogueTree, ...root_catalogue }
    if (catalogue_map) state.catalogueTree.catalogue_map = catalogue_map;
}
export default {
    setUserInfo,
    setCatalogue
}