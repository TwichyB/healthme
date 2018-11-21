<template>
  <div id="app">
    <div class="row justify-content-center" id="head">
      <router-link to="/">Home</router-link>

      <form>
        <div class="row">

          <div class="col">
            <input type="text" placeholder="search..">
          </div>
          <div class="col">
            <button>
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
			</form>

      <router-link to="/login">Log in</router-link>
    </div>
    <div id="nav">
      <router-link to="/recipe">Recipe</router-link> |
      <router-link to="/delivery">Delivery</router-link> |
      <router-link to="/workout">Workout</router-link> |
      <router-link to="/fitness">Fitness</router-link> |
      <router-link to="/iot">IoT</router-link> |
      <router-link to="/info">Information</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#head {
  padding: 10px;
}
</style>
