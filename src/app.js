import Vue from 'vue';
import Button from './button.vue'

Vue.component('GButton',Button)
new Vue({
    el:'#app',
    mounted(){
        console.log(1111)
    }
})