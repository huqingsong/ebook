
 const actions = {
    setFileName: ({commit}, newfileName) => {
        return commit('SET_FILE_NAME', newfileName)
    },
    setmenuVisible: ({commit}, menuVisible) => {
        return commit('SET_MENU', menuVisible)
    },
    setsettingVisible: ({commit}, settingVisible) => {
        return commit('SET_SETTING', settingVisible)
    },
    setdefaultFontSize: ({commit}, defaultFontSize) => {
        return commit('SET_FONTSIZE', defaultFontSize)
    }
}
 export default actions