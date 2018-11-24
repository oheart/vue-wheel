<template>
    <button class="g-button" :class="{[`icon-${iconPos}`]:true}"
      @click="$emit('click')">
      <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
      <g-icon name="loading" class="icon loading" v-if="loading" name="loading"></g-icon>
      <div class="content">
         <slot></slot>
      </div>
    </button>
</template>

<script>
export default {
  name: 'gButton',
  props: {
    icon: {},
    loading:{
      type: Boolean,
      default: false
    },
    iconPos: {
      type: String,
      default: 'left',
      validator(value){   
        return value === 'left' || value === 'right';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes spin{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  > .icon{
    order: 1;
    margin-right: 0.1em;
  }
  > .content{
    order: 2;
  }
  &.icon-right{
     > .content{
      order: 1
    }
    > .icon{
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }
  .loading{
      animation: spin 2s infinite linear;
  }
}
</style>
