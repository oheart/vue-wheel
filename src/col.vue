<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
export default{
    name: 'gCol',
    props:{
      span: {
        type: [Number, String]  // 接收Number和String两种形式 
      } 
    }
}
</script>

<style lang="scss" scoped>
.col {
  width: 50%;
  height: 100px;
  background: #46A0FC;
  border: 1px solid #f2df37;
  color: #FFF;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
    }
  } 
}
</style>
