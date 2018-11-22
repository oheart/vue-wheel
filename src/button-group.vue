<template>
    <div class="g-button-group">
         <slot></slot>
    </div>
</template>

<script>
export default{
    mounted(){
       for(let node of this.$el.children){  // 处理类似<div><g-button></g-button></div>的不规范情况
           let name = node.nodeName.toLowerCase();
           if(name !== 'button'){
               console.warn(`g-button-group的元素应该全是button, 但是你写的是${name}`);
           }
       }
    }
}
</script>

<style lang="scss">
.g-button-group{
    display: inline-flex;
    vertical-align: middle;
    > .g-button{
        border-radius: 0;
        &:not(:first-child){
            margin-left: -1px;
        }
        &:first-child{
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
        }
        &:last-child{
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
        &:hover{
            position: relative;
            z-index: 1;
        }
    }
}
</style>