<template>
  <overlay-scrollbars>
    <div class="border-b p-3">
      <a-input-search
        v-model="keyword"
        placeholder="input search repo"
        @change="onSearch"
      />
    </div>
    <a-list item-layout="horizontal" :data-source="list">
      <a-list-item slot="renderItem" slot-scope="item">
        <router-link :to="'/' + item.name" class="w-full px-3">
          <div class="text-lg truncate">
            {{ item.name }}
          </div>
          <div class="text-xs text-gray-600 truncate h-5 mt-1">
            {{ item.description }}
          </div>
        </router-link>
      </a-list-item>
    </a-list>
  </overlay-scrollbars>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    list: [],
    all: [],
    keyword: "",
  }),
  mounted() {
    this.getRepos();
  },
  methods: {
    onSearch() {
      this.list = this.searchArr(this.all, this.keyword, "name");
    },
    getRepos() {
      this.octokit
        .request("GET /users/{username}/repos", {
          username: this.owner,
        })
        .then((res) => {
          this.list = res.data;
          this.all = this.list;
        });
    },
    searchArr(list, keyWord, key) {
      var reg = new RegExp(keyWord);
      var arr = [];
      for (var i = 0; i < list.length; i++) {
        if (reg.test(list[i][key])) {
          arr.push(list[i]);
        }
      }
      return arr;
    },
  },
  computed: {
    ...mapGetters(["repo", "owner"]),
  },
};
</script>