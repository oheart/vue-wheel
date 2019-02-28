<template>
    <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
       :style="{paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}"> 
       <div style="border: 1px solid red;height:68px;">
          <slot></slot>
       </div>
    </div>
</template>

<script>
export default{
    name: 'gCol',
    props:{
      span: {
        type: [Number, String]  // 接收Number和String两种形式 
      },
      offset:{
        type: [Number, String]
      }
    },
    data(){
      return {
        gutter: 0
      }
    },
    created(){
       console.log('col created')
    },
    mounted(){
      console.log('col mounted')
    }
}
</script>

<style lang="scss" scoped>
.col {
  width: 50%;
  height: 70px;
  // background: #46A0FC;
  // border: 1px solid #f2df37;
  color: #FFF;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
    }
  } 
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
