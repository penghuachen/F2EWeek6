<template>
  <div id="app">
    <router-view class="views"/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  color: #38470B;
}

.views {
  width: 100%;
  min-height: 100vh;
}
</style>
