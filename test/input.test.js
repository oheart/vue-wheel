const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', ()=> {
    it('存在', ()=> {
        expect(Input).to.exist
    })

    // props
    describe('props', ()=> {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })

        it('接收 value', ()=> {
            vm = new Constructor({
                propsData:{
                    value: '1234'
                }
            }).$mount()
            const inputEle = vm.$el.querySelector('input')
            expect(inputEle.value).to.equal('1234')
        })

        it('接收 disabled', ()=> {
            vm = new Constructor({
                propsData:{
                    disabled: true
                }
            }).$mount()
            const inputEle = vm.$el.querySelector('input')
            console.log(inputEle.outerHTML);
            expect(inputEle.disabled).to.equal(true)
        })

        it('接收 readonly', ()=> {
            vm = new Constructor({
                propsData:{
                    readonly: true
                }
            }).$mount()
            const inputEle = vm.$el.querySelector('input')
            console.log(inputEle.outerHTML)
            expect(inputEle.readOnly).to.equal(true)
        })

        it('接收error', ()=>{
            vm = new Constructor({
                propsData:{
                    error: '你错了'
                }
            }).$mount()
            const useEle = vm.$el.querySelector('use')
            expect(useEle.getAttribute('xlink:href')).to.equal('#icon-error')

            const errorMsg = vm.$el.querySelector('.error-msg')
            expect(errorMsg.innerText).to.equal('你错了')
        })
    })

    // 事件
    describe('事件', ()=> {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持 change 事件', ()=> {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on('change', callback)
            // 触发input的change事件(回调调用且change事件第一个参数是event)
            var event = new Event('change')
            console.log('event', event)
            let inputEle = vm.$el.querySelector('input')
            inputEle.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
        })
        it('支持 input 事件', ()=> {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on('input', callback)
            // 触发input事件(回调调用且input事件第一个参数是event)
            var event = new Event('input')
            console.log('event', event)
            let inputEle = vm.$el.querySelector('input')
            inputEle.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
        })
        it('支持 focus 事件', ()=> {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on('focus', callback)
            // 触发input的focus事件(回调调用且focus事件第一个参数是event)
            var event = new Event('focus')
            console.log('event', event)
            let inputEle = vm.$el.querySelector('input')
            inputEle.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
        })
        it('支持 blur 事件', ()=> {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on('blur', callback)
            // 触发input的focus事件(回调调用且focus事件第一个参数是event)
            var event = new Event('blur')
            console.log('event', event)
            let inputEle = vm.$el.querySelector('input')
            inputEle.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
        })
    })
    
    
})