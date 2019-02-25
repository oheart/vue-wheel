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

        it('接收 value', ()=> {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData:{
                    value: '1234'
                }
            }).$mount()
            const inputEle = vm.$el.querySelector('input')
            expect(inputEle.value).to.equal('1234')
            vm.$destroy()
        })

        it('接收 disabled', ()=> {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData:{
                    disabled: true
                }
            }).$mount()
            const inputEle = vm.$el.querySelector('input')
            console.log(inputEle.outerHTML);
            expect(inputEle.disabled).to.equal(true)
            vm.$destroy()
        })

        it('接收 readonly', ()=> {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData:{
                    readonly: true
                }
            }).$mount()
            const inputEle = vm.$el.querySelector('input')
            console.log(inputEle.outerHTML)
            expect(inputEle.readOnly).to.equal(true)
            vm.$destroy()
        })

        it('接收error', ()=>{
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData:{
                    error: '你错了'
                }
            }).$mount()
            const useEle = vm.$el.querySelector('use')
            expect(useEle.getAttribute('xlink:href')).to.equal('#icon-error')

            const errorMsg = vm.$el.querySelector('.error-msg')
            expect(errorMsg.innerText).to.equal('你错了')
            vm.$destroy()
        })
    })
    
    
})