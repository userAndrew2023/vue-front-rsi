<template>

    <div class="container">
    <header class="d-flex flex-wrap justify-content-md-between py-3 mb-4 header">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 a_main">
        RSI Scanner
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><router-link class="nav-link" to="/">RSI</router-link></li>
        <li><router-link class="nav-link" to="/deals/">Active Deals</router-link></li>
        <li><a href="#" class="nav-link">About</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <button @click="href()" type="button" class="btn btn-primary">Login</button>
      </div>
    </header>
  </div>

</template>

<script>
export default {
  methods: {
    
  }
}
</script>

<style scoped>


.header {
  background-color: #afdafc;
  padding: 30px;
  border-radius: 0 0 20px 20px;
}

a {
  color: black;
  transition: 0.4s;
}

a:hover {
  color: blue;
}

.a_main {
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: #140f0b;
}

</style>
