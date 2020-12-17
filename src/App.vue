<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    let ClientID = "272c05f414538177d1ad";
    let ClientSecrets = "901874b1509a97105ac6bd6be422057aecf4ce0f";
    let token = localStorage.getItem("token");
    if (!token) {
      let code = this.getQueryVariable("code");
      if (code) {
        this.octokit
          .request(
            "POST https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",
            {
              headers: {
                origin: "x-requested-with",
                Accept: "application/json"
              },
              client_id: ClientID,
              client_secret: ClientSecrets,
              code: code,
            }
          )
          .then((res) => {
            localStorage.setItem("token", res.data.access_token);
            this.$router.go(0);
          });
      } else {
        window.location.href =
          "https://github.com/login/oauth/authorize?client_id=" + ClientID;
      }
    }
  },
  methods: {
    getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
      return false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
button {
  outline: none !important;
}
.link:hover {
  text-decoration: underline;
  color: #667eea;
  cursor: pointer;
}
</style>

