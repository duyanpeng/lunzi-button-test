<!--  -->
<template>
  <svg class="g-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${type}`"></use>
</svg>
</template>

<script>
export default {
  props:['type'],  
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style>
.g-icon{
    width:1em;
    height:1em;
}
</style>