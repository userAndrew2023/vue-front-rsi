<template>
    <div>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <button type="button" @click="click()" class="btn btn-primary">Submit</button>
</form>
    </div>
</template>


<script>

export default {
    methods: {
        click() {
            fetch("http://185.192.247.126:5000/login", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    login: this.email,
                    password: this.password
                })
            }).then(response => response.json()).then(json => {
                if (json.status == "ok") {
                    this.$cookies.set("username", true, "30d")
                }
            })
        }
    }
}

</script>


<style scoped>

form {
    display: inline-block;
}

button {
    margin: 5px;
}

</style>