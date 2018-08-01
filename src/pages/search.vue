<template>
     <div class="container">
        <header>
            <img :src="images.search"  alt="" srcset="">
            <input type="text" placeholder="搜索课程专家">
            <span>取消</span>
        </header>
        <nav class="nearSearch">
                <p>
                    <span>最近搜索</span>
                    <span id="clearRecord">清空记录</span>
                </p>
                <div class="recordBox">
                    <span>胡海</span>
                    <span>腹腔镜什么什么想不起来了</span>
                    <span>腹腔镜什了</span>
                    <span>起来了</span>
                </div>
        </nav>
            <div class="tipBox">
                <div class="tipCon">
                    <span>提示</span>
                    <p>确认清空搜索历史吗？</p>
                    <ul class="tipChoose">
                        <li id="cancel">取消</li>
                        <li id="clear">清空</li>
                    </ul>
                </div>
            </div>
     </div>
</template>

<script>
    
</script>
<style scoped lang="scss">

</style>