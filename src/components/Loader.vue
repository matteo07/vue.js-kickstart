<template>
  <div class="loaderLayout" v-if="show">
    <div class="loader">
      <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="6" stroke-miterlimit="10"/>
      </svg>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Loader',
  data() {
    return {
      show: true
    }
  },
  mounted() {
    document.onreadystatechange = () => hideShowLoader(this)

    function hideShowLoader(context) {
      if (document.readyState == 'interactive') {
        context.show = true
      } else if (document.readyState == 'complete') {
        context.show = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$color1: #0057ff;
$color2: #008744;
$color3: #ffc700;

$bgColor: #110c13;
$width: 60px;

.loaderLayout {
  background-color: $bgColor;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5%;
  z-index: 1;
}

.loader {
  position: relative;
  margin: 0 auto;
  height: 100%;
  width: $width;
  transform: translateY(-$width / 2);

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
}

.circular {
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
}

// ANIMATIONS

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}

@keyframes color {
  100%,
  0% {
    stroke: $color1;
  }
  40% {
    stroke: $color2;
  }
  80%,
  90% {
    stroke: $color3;
  }
}
</style>
