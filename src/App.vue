<template>
  <svg viewBox="0 0 400 200">
    <text x="-20%" y="50%"> Hello World </text>
  </svg>   
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bangers&family=Homemade+Apple&family=Sacramento&display=swap");

#app, body, html {
  font-family: "Bangers", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  font-family: "Bangers", cursive;
}

.hello-text {
  border: 1px solid black;
}

svg {
    width: 100%;
    height: 300px;
    margin: auto;
}

svg text {
    text-transform: uppercase;
    animation: stroke 5s infinite alternate;
    letter-spacing: 10px;
    font-size: 100px;
}
@keyframes stroke {
    0% {
        fill: rgba(72, 138, 20, 0);
        stroke: rgba(54, 95, 160, 1);
        stroke-dashoffset: 25%;
        stroke-dasharray: 0 50%;
        stroke-width: 0.2;
    }
    50% {
        fill: rgba(72, 138, 20, 0);
        stroke: rgba(54, 95, 160, 1);
        stroke-width: 0.5;
    }
    70% {
        fill: rgba(72, 138, 20, 0);
        stroke: rgba(54, 95, 160, 1);
        stroke-width: 1;
    }
    90%,
    100% {
        fill: rgba(72, 138, 204, 1);
        stroke: rgba(54, 95, 160, 0);
        stroke-dashoffset: -25%;
        stroke-dasharray: 50% 0;
        stroke-width: 0;
    }
}
</style>
