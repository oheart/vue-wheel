import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data:{
        loading1: false,
        loading2: true,
        loading3: false,
        loading4: false
    }
})

// 单元测试
import chai from 'chai'
const expect = chai.expect
{  
    // 动态声明一个按钮，渲染到页面
    const Constructor = Vue.extend(Button)    
    const button = new Constructor({    // 按钮的实例
        propsData:{
            icon: 'settings'
        }
    });       
    button.$mount('#test')
    let useElement = button.$el.querySelector('use')
    console.log(useElement);
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-settings')
}