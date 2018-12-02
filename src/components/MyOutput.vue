<template>
  <div class="myOutput" v-if="msg">
    <p>{{ msg.message + ": " + input }}</p>
    <p>url param: {{ urlParam }}</p>
  </div>
</template>

<script>
export default {
  name: 'myOutput',
  props: ['msg', 'input', "urlParam"]
}
</script>

<style scoped>
p {
  display: inline-block;
}
</style>
