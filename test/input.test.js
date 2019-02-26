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
        it('支持 change/input/focus/blur 事件', ()=> {
            var eventsArr = ['change' ,'input', 'focus' , 'blur'];
            eventsArr.forEach((eventName)=> {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                // 触发input的change事件(回调调用且change事件第一个参数是event)
                var event = new Event(eventName)
                console.log('event', event)
                // 给event添加target.value值
                Object.defineProperty(
                    event, 'target', {
                        value: {value: 'hi'}, 
                        enumerable: true
                    }
                )
                let inputEle = vm.$el.querySelector('input')
                inputEle.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi')
            })
        })
    })
    
    
})