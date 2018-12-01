<template>
  <div class="myOutput" v-if="msg">
    <p>{{ msg.message + input }}</p>
  </div>
</template>

<script>
export default {
  name: 'myOutput',
  props: [
    'msg',
    'input'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
