<template>
  <div>
    <div>
      <nav>
        <div class="container">
          <ul class="nav__left">
            <li><router-link to="/"><i class="fa fa-home"></i> Home</router-link></li>
            <li><router-link to="/admin"><i class="fa fa-user"></i> Admin</router-link></li>
            <li><router-link to="/cart"><i class="fa fa-shopping-cart"></i> Cart</router-link></li>
          </ul>
        </div>
      </nav>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav__left {
  display: flex;
  flex-direction: row;
  padding: 15px;
  margin-left: 0;
  list-style: none;
}

.nav__left li {
  margin-right: 20px;
}
</style>
