<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">HealthMe</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">
    

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

    <!-- <div class="row justify-content-center" id="head">
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
    </div> -->
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
