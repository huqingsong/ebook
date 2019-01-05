const book = {
   state: {
       fileName: '' ,
       menuVisible: false,
       settingVisible: -1,  //-1：不显示，0：字号，1：主题，2进度，3目录
       defaultFontSize: 16
   },
   mutations: {
       'SET_FILE_NAME': (state, newfileName)=>{
           state.fileName = newfileName
       },
       'SET_MENU': (state, menuVisible)=>{
           state.menuVisible = menuVisible
       },
       'SET_SETTING': (state, settingVisible)=>{
           state.settingVisible = settingVisible
       },
       'SET_FONTSIZE': (state, defaultFontSize) => {
           state.defaultFontSize = defaultFontSize
       }
   }
}

export default  book

