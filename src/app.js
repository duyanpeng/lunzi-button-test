import Vue from 'vue';
import Button from './button.vue'
import Icon from './icon.vue'
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
Vue.component('GButton', Button)
Vue.component('GIcon', Icon)
new Vue({
    el: '#app',
})
const expect = chai.expect
// {
//     let VButton = Vue.extend(Button)
//     let vm = new VButton({
//         propsData: {
//             iconType: 'setting'
//         }
//     })
//     let ele = vm.$mount().$el.querySelector('use')
//     let href = ele.getAttribute('xlink:href')
//     expect(href).to.eq('#icon-setting')
//     vm.$mount().$el.remove();
//     vm.$destroy()
// }
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             iconType: 'setting',
//             loading: true
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#icon-loading')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const div = document.createElement('div');
//     document.body.appendChild(div)
//     const VButton = Vue.extend(Button)
//     let vm = new VButton({
//         propsData: {
//             iconType: 'setting',
//             iconPosition: 'right',
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let { order } = window.getComputedStyle(svg)
//     expect(order).to.eq('3')
//     vm.$el.remove()
//     vm.$destroy()
// }
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
     let app = vm.$mount()
    let spy = chai.spy(function () { })
    vm.$on('click', function(){
        console.log(2222)
    })
    let button = app.$el
    console.log(button)
    button.click()
    expect(spy).to.have.been.called()
}