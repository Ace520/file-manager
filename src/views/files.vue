<template>
  <div class="flex flex-col h-full">
    <div
      class="h-12 flex-none flex items-center justify-between text-lg font-blod pl-2 border-b shadow"
    >
      <div class="flex items-center text-indigo-500">
        <img class="h-4 mr-2" src="../assets/icon/repo.png" />
        <router-link class="link truncate" :to="'/' + repo">
          {{ repo }}
        </router-link>
        <div class="flex items-center">
          <div v-for="(item, index) in paths" :key="index">
            <span class="px-2">/</span>
            <router-link class="link" :to="item.path"
              >{{ item.name }}
            </router-link>
          </div>
        </div>
      </div>
      <div></div>
    </div>

    <overlay-scrollbars class="flex-1">
      <div v-if="error" class="text-center py-5">
        {{ error }}
      </div>
      <div v-else>
        <div
          v-for="(item, index) in dirs"
          :key="index"
          class="border-b px-2 flex h-10 items-center"
        >
          <div class="flex items-center">
            <img class="h-4 mr-2" src="../assets/icon/dir.png" />
            <router-link class="link" :to="'/' + repo + '/' + item.path">
              {{ item.name }}
            </router-link>
          </div>
        </div>
        <div
          v-for="(item, index) in files"
          :key="'f' + index"
          class="border-b px-2 flex h-10 items-center"
        >
          <div class="flex items-center">
            <img class="h-4 mr-2" src="../assets/icon/file.png" />
            <div class="link" @click="clickFile(item)">{{ item.name }}</div>
          </div>

          <!-- <div>{{ item.download_url }}</div>
        <div>{{ item.git_url }}</div>
        <div>{{ item.html_url }}</div>
        <div>{{ item.path }}</div>
        <div>{{ item.sha }}</div>
        <div>{{ item.size }}</div>
        <div>{{ item.type }}</div>
        <div>{{ item.url }}</div> -->
        </div>
      </div>
    </overlay-scrollbars>

    <editor :show="showEdit" :item="item"></editor>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Editor from "./editor.vue";
export default {
  name: "files",
  components: { Editor },
  data: () => ({
    dirs: [],
    files: [],
    error: "",
    showEdit: false,
    item: {},
  }),
  watch: {
    $route() {
      this.getContents();
    },
  },
  mounted() {
    this.getContents();
  },
  methods: {
    clickFile(item) {
      this.item = item;
      this.showEdit = !this.showEdit;
    },
    getContents() {
      this.error = "";
      this.dirs = [];
      this.files = [];
      this.octokit
        .request("GET /repos/{owner}/{repo}/contents/{path}", {
          owner: this.owner,
          repo: this.repo,
          path: this.path,
        })
        .then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].type == "dir") {
              this.dirs.push(res.data[i]);
            } else {
              this.files.push(res.data[i]);
            }
          }
        })
        .catch((res) => {
          this.error = res.message;
        });
    },
  },
  computed: {
    ...mapGetters(["repo", "path"]),
    paths() {
      let arr = this.path ? this.path.split("/") : [];
      let newArr = [];
      let paths = [];
      for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        paths.push({
          name: arr[i],
          path: "/" + this.repo + "/" + newArr.join("/"),
        });
      }
      return paths;
    },
  },
};
</script>
<style scoped>
</style>