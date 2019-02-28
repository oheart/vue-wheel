<template>
    <div class="col" :class="colClass" :style="colStyle"> 
       <div style="border: 1px solid red;height:70px;">
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
    data(){  // 只会在created的时候读一次
      return {
        gutter: 0
      }
    },
    computed:{
      colClass(){
          let {span, offset} = this;
          return [
              span && `col-${span}`, 
              offset && `offset-${offset}`
          ];
      },
      colStyle(){
        return {
            paddingLeft: this.gutter/2 + 'px', 
            paddingRight: this.gutter/2 + 'px'
        }
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
  color: #000;

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
