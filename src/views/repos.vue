<template>
  <overlay-scrollbars>
    <div
      v-for="(item, index) in list"
      :key="index"
      :to="'/' + item.name"
      class="border-b"
      :class="repo == item.name ? 'bg-gray-200' : ''"
    >
      <div class="py-1 w-full px-2">
        <router-link :to="'/' + item.name">
          <div class="text-lg my-2 truncate">
            {{ item.name }}
          </div>
          <div class="text-sm text-gray-500">
            {{ item.updated_at }}
          </div>
        </router-link>
      </div>
    </div>
  </overlay-scrollbars>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    list: [],
  }),
  mounted() {
    this.getRepos();
  },
  methods: {
    getRepos() {
      this.octokit
        .request("GET /users/{username}/repos", {
          username: this.owner,
        })
        .then((res) => {
          this.list = res.data;
        });
    },
  },
  computed: {
    ...mapGetters(["repo"]),
  },
};
</script>