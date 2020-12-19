<template>
  <div
    class="w-screen h-screen bg-cover bg-center flex flex-col"
    v-lazy:background-image="require('@/assets/images/login-bg.jpg')"
  >
    <div class="w-full flex justify-between h-16 px-6 flex-none">
      <div class="flex items-center cursor-pointer">
        <img class="h-12" src="../assets/logo.png" />
        <div class="text-white ml-1">
          <span class="font-bold">GH文件管理器</span
          ><span class="text-xs ml-1">v1.0</span>
        </div>
      </div>
      <div class="flex items-center">
        <a-button
          href="https://github.com/Ace520/file-manager"
          target="_blank"
          shape="circle"
        >
          <img src="../assets/images/github.png" />
        </a-button>
      </div>
    </div>
    <div class="flex-1 flex items-center justify-center">
      <a-card class="text-center px-32 py-8" title="登录">
        <a-button
          :href="
            'https://github.com/login/oauth/authorize?client_id=' +
            ClientID +
            '&scope=repo'
          "
          type="primary"
          class="flex items-center justify-center my-6"
        >
          <img class="w-4 h-4" src="../assets/images/github.png" />
          <a-divider type="vertical" />
          <div>GitHub 登录</div>
        </a-button>
      </a-card>
    </div>
    <div class="w-full h-20 flex-none flex items-center justify-center">
      <a
        class="text-white"
        href="https://ace520.github.io/blog"
        target="_blank"
      >
        Blog
      </a>
      <a-divider type="vertical" />
      <a
        class="text-white"
        href="https://docs.github.com/en/free-pro-team@latest/rest"
        target="_blank"
      >
        GitHub API
      </a>
    </div>
  </div>
</template>
<script>
import Cookies from "js-cookie";

export default {
  name: "App",
  components: {},
  data: () => ({
    ClientID: "bfda7c34c2d1606d5a50",
    ClientSecrets: "5cf585f36183c3bd977d4c1b9d79b52e845c4b37",
  }),
  mounted() {
    let code = this.getQueryVariable("code");
    if (code) {
      this.getToken(code);
    }
  },
  methods: {
    getToken(code) {
      this.octokit
        .request(
          "POST https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",
          {
            headers: {
              origin: "x-requested-with",
              Accept: "application/json",
            },
            client_id: this.ClientID,
            client_secret: this.ClientSecrets,
            code: code,
          }
        )
        .then((res) => {
          if (res.data.error) {
            this.$message.error(res.data.error);
            return false;
          }
          Cookies.set("token", res.data.access_token);
          this.getUser();
        });
    },
    getUser() {
      let token = "token " + Cookies.get("token");
      this.octokit
        .request("GET https://api.github.com/user", {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          if (res.data.error) {
            this.$message.error(res.data.error);
            return false;
          }
          Cookies.set("owner", res.data.login);
          Cookies.set("avatar_url", res.data.avatar_url);
          this.$router.push("/");
        });
    },
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