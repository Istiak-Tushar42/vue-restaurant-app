<template>
  <header class="header" id="nav">
    <div class="container">
      <div class="logo">
        <router-link class="brand" to="/">Tasty Spoon</router-link>
      </div>
      
      <div class="header-menu">
        <router-link to="/signin">Sign In</router-link>
        <router-link to="/signup">Sign Up</router-link>
      </div>
    </div>
  </header>
  <router-view/>
</template>

<style lang="scss">
  @import 'scss/style.scss';
</style>
