<template>
    <div class="ebook-reader">
        <div id="read"></div>
    </div>
</template>

<script>
    import Epub from 'epubjs'
    import { ebookMixin } from '../../utils/mixin'
    global.ePub = Epub
    export default {
        mixins: [ ebookMixin ],
        name: "EbookReader",
        components: {
        },
        methods: {
          prevPage () {
            if (this.rendition) {
                this.rendition.prev()
            }
          },
          nextPage () {
            if (this.rendition){
                this.rendition.next()
            }
          },
          toggleTitleAndMenu () {
              this.setmenuVisible(!this.menuVisible)
          },
          hideTitleAndMenu () {
              this.setmenuVisible(false)
          },
          initEpub () {
              const baseUrl = 'http://127.0.0.1:9000/epub/'
              const url = baseUrl + this.fileName + '.epub'
              this.book = new ePub(url)
              this.rendition = this.book.renderTo('read', {
                  width: window.innerWidth,
                  height: window.innerHeight
              })
              this.rendition.display()
              this.rendition.on('touchstart', event=>{
                   this.touchStartX = event.changedTouches[0].clientX
                   this.touchStartTime = event.timeStamp
              })
              this.rendition.on('touchend', event=>{
                  this.touchEndTime = event.timeStamp
                  const time = this.touchEndTime - this.touchStartTime
                  const offsetX = event.changedTouches[0].clientX - this.touchStartX
                  console.log(time, offsetX)
                  if (time < 500 && offsetX > 40){
                      this.prevPage()
                      this.hideTitleAndMenu()
                  }else if (time < 500 && offsetX < -40){
                      this.nextPage()
                      this.hideTitleAndMenu()
                  }else{
                      this.toggleTitleAndMenu()

                  }
                  event.preventDefault()
                  event.stopPropagation()
              })
          }
        },
        mounted () {
            this.setFileName(this.$route.params.fileName.split('|').join('/')).then(()=>{
                this.initEpub()
            })
        }

    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../assets/styles/global";
</style>