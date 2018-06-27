<!--  -->
<template>
  <div >
      <button class="g-button">
          <g-icon class="g-button-icon" v-if="iconType && !loading" :type="iconType"></g-icon>
          <g-icon class="g-button-loading" v-if="loading" type="loading" ></g-icon>
          <div class="g-button-content">
          <slot class="g-button-slot"></slot>
          </div>
      </button>
  </div>
</template>

<script>
export default {
  props:['iconType','loading',''],  
  data () {
    return {
    };
  },
  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang="less">
.g-button{
    display: flex;
    justify-content: center;
    align-items: center;
    height:var(--button-height);
    border:1px solid #d9d9d9;
    outline:none; 
    border-radius: 4px;
    padding:0 1em;
    font-size: var(--font-size);
    &:hover{
        border-color:#40a9ff;
        // color:#40a9ff;
    }
    &:active{
        border-color:#096dd9;
        // color:#096dd9;
    }
}
.g-button-icon{
    order:1;
}
.g-button-content{
    order:2;
}
.g-button-loading{
    animation: loading 1s linear infinite;
}
@keyframes loading {
    from{
        transform:rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
}
</style>