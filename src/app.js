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
    // 动态声明一个按钮，渲染到页面--测试传入的icon参数
    const Constructor = Vue.extend(Button)    
    const vm = new Constructor({    // 按钮的实例
        propsData:{
            icon: 'settings'
        }
    });       
    vm.$mount() // mount到内存
    let useElement = vm.$el.querySelector('use')
    console.log(useElement);
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-settings')
    vm.$el.remove()
    vm.$destroy()
}
{
    // 动态声明一个按钮，渲染到页面--测试传入的loading参数
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({ 
        propsData:{
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    console.log(useElement);
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')
    vm.$el.remove()
    vm.$destroy()
}
{
     // 动态声明一个按钮，渲染到页面--测试icon的order样式（order：1代表图标在左边；order：2代表图标在右边）
     const div = document.createElement('div')   
     document.body.appendChild(div)
     const Constructor = Vue.extend(Button)
     const vm = new Constructor({
         propsData:{
             icon: 'settings'
         }
     })
     vm.$mount(div)  // 动态生成div，把icon添加到页面
     let svg = vm.$el.querySelector('svg')
     let {order} = window.getComputedStyle(svg)
     console.log('order', order)
     expect(order).to.eq('1')
     vm.$el.remove()
     vm.$destroy()
}
{
    // 动态声明一个按钮，渲染到页面--测试传入的iconPos参数
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'settings',
            iconPos: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    console.log('order', order)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
{
    // 动态声明一个按钮，渲染到页面--测试click事件
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'settings'
        }
    })
    vm.$mount()
    vm.$on('click', function(){ // 需要mock
        console.log(1)
    })
    let button = vm.$el
    console.log('button', button)
    button.click()
}