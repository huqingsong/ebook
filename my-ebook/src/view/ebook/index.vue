<template>
    <div class="ebook">
        <ebook-title></ebook-title>
        <ebook-reader></ebook-reader>
        <ebook-menu></ebook-menu>
    </div>
</template>

<script>
    import EbookReader from '../../components/Ebook/EbookReader'
    import EbookMenu from '../../components/Ebook/EbookMenu'
    import EbookTitle from '../../components/Ebook/EbookTitle'
    export default {
        name: "index",
        components: {
            EbookReader,
            EbookMenu,
            EbookTitle
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../assets/styles/global";
    @import "../../assets/styles/reset";

</style>