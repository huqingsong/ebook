<template>
  <div class="home">
      <span class="icon-bookmark"></span>
      <div id="read">
      </div>
  </div>
</template>

<script>
    import Epub from 'epubjs'
    global.ePub =  Epub
    export default {
      name: 'home',
      mounted () {
          this.book = new Epub("/2018_Book_Self-AssembledMoleculesNewKind.epub")
          console.log(this.book)
          this.book.renderTo("read", {
                width: window.innerWidth,
                height: window.innerHeight
          }).display()
      },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon-bookmark{
    font-size: 20px;
    color: red;
}

</style>
