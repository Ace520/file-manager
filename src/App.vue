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
    let ClientSecrets = "52fa343de91d32c6177a2a1aac1ba9b45a8e3c68";
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
                Accept: "application/json",
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
          "https://github.com/login/oauth/authorize?client_id=" +
          ClientID +
          "&scope=repo";
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
button,
input {
  outline: none !important;
}
.btn {
  outline: none;
  background: #fff;
  border: 0;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 2px 4px 8px #f0eeee;
  font-weight: 600;
  border-radius: 3px;
  min-width: 90px;
}
.btn-blue {
  color: #fff;
  box-shadow: 0 4px 8px rgba(32, 160, 255, 0.3);
  background: #4db3ff;
}
.btn-green {
  color: #fff;
  box-shadow: 0 4px 8px rgba(80, 201, 186, 0.3);
  background: #50c9ba;
}
.btn-red {
  color: #fff;
  box-shadow: 0 4px 8px rgba(242, 19, 104, 0.3);
  background: #f21368;
}

.link:hover {
  text-decoration: underline;
  color: #667eea;
  cursor: pointer;
}
</style>

