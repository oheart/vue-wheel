<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
export default{
     name: 'gRow',
     props: {
         gutter:{
             type: [Number, String]
         }
     },
     computed:{
         rowStyle(){
            return{
                marginLeft:-this.gutter/2 + 'px', 
                marginRight: -this.gutter/2 + 'px'
            }
         }
     },
     created(){ // createElement
        //  console.log(this.$children); // 没有儿子
        console.log('row created')
     },
     mounted(){ // append到页面
         console.log('row mounted')
         console.log(this.$children); // 有儿子 
         this.$children.forEach((vm) => {
             vm.gutter = this.gutter;
         })
     }

    /*
        var div = document.createElement('div')   // created
        var childDiv = document.createElement('div')   // child created
        div.appendChild(childDiv)   // child mounted
        document.body.appendChild(div)   // mounted
    */
}
</script>

<style  lang="scss" scoped>
.row{
    display: flex;
    // background: #9f9fea;
}
</style>
