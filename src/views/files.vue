<template>
  <div class="flex flex-col h-full">
    <div
      class="h-12 flex-none flex items-center justify-between text-lg font-blod pl-2 border-b shadow"
    >
      <div class="flex items-center text-indigo-500 pr-3 pl-1">
        <a-icon
          type="home"
          class="mr-2 text-sm text-gray-600"
          style="margin-bottom: 0.15rem"
        />
        <a-breadcrumb>
          <a-breadcrumb-item>
            <router-link class="link" :to="'/' + repo">
              {{ repo }}
            </router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item v-for="(item, index) in paths" :key="index">
            <router-link class="link" :to="item.path">
              {{ item.name }}
            </router-link>
          </a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div class="flex items-center">
        <a-button
          type="primary"
          shape="circle"
          @click="getContents"
          icon="sync"
          class="mr-3 flex items-center justify-center"
          size="small"
          ghost
        />
        <a-button
          type="primary"
          class="mr-3"
          @click="showUpload = !showUpload"
          ghost
        >
          上传文件
        </a-button>
        <a-button type="danger" class="mr-3" @click="clickFile({})" ghost>
          新建文件
        </a-button>
        <a-dropdown>
          <div @click="(e) => e.preventDefault()" class="mr-3">
            <a-avatar class="shadow" :src="avatar_url" />
            <a-icon type="caret-down" class="text-xs ml-1" />
          </div>
          <a-menu slot="overlay">
            <a-menu-item>
              <a :href="'https://github.com/' + owner" target="_blank">
                {{ owner }}
              </a>
            </a-menu-item>
            <a-menu-item>
              <div @click="outLogin">退出</div>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>

    <overlay-scrollbars class="flex-1">
      <a-list item-layout="horizontal" :data-source="list">
        <a-list-item slot="renderItem" slot-scope="item" style="height: 45px">
          <div v-if="item.type === 'dir'" class="flex items-center px-3">
            <a-icon
              type="folder"
              class="mr-2"
              style="color: #79b8ff"
              theme="filled"
            />
            <router-link class="link" :to="'/' + repo + '/' + item.path">
              {{ item.name }}
            </router-link>
          </div>
          <div v-else class="flex items-center px-3">
            <a-icon type="file" class="mr-2 text-gray-600" />
            <div class="link" @click="clickFile(item)">{{ item.name }}</div>
          </div>
          <div
            v-if="item.type === 'file'"
            class="text-sm text-red-600 cursor-pointer"
            slot="actions"
            @click="delFile(item)"
          >
            删除
          </div>
        </a-list-item>
      </a-list>
    </overlay-scrollbars>

    <editor :show="showEdit" :item="item"></editor>
    <upload :show="showUpload" :item="item"></upload>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Cookies from "js-cookie";
import Editor from "./editor.vue";
import Upload from "./upload.vue";
export default {
  components: { Editor, Upload },
  data: () => ({
    repo: "",
    path: "",
    list: [],
    showUpload: false,
    showEdit: false,
    item: {},
  }),
  watch: {
    $route(to) {
      this.initPath(to);
    },
  },
  mounted() {
    this.initPath(this.$route);
  },
  methods: {
    clickFile(item) {
      if (item.path) {
        this.item = item;
        this.item.repo = this.repo;
      } else {
        this.item = {
          repo: this.repo,
          dir: this.path,
        };
      }
      this.showEdit = !this.showEdit;
    },
    delFile(item) {
      let that = this;
      this.$confirm({
        title: "是否确定要删除此文件吗？",
        content: item.path,
        okText: "删除",
        okType: "danger",
        cancelText: "取消",
        centered: true,
        onOk() {
          return that.octokit
            .request("DELETE /repos/{owner}/{repo}/contents/{path}", {
              owner: that.owner,
              repo: that.repo,
              path: item.path,
              message: "DELETE",
              sha: item.sha,
            })
            .then((res) => {
              if (res.data.error) {
                that.$message.error(res.data.error);
                return false;
              }
              that.$message.success("删除成功");
            });
        },
        onCancel() {},
      });
    },
    getContents() {
      this.list = [];
      this.octokit
        .request("GET /repos/{owner}/{repo}/contents/{path}", {
          owner: this.owner,
          repo: this.repo,
          path: this.path,
        })
        .then((res) => {
          let dirs = [];
          let files = [];
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].type == "dir") {
              dirs.push(res.data[i]);
            } else {
              files.push(res.data[i]);
            }
          }
          this.list = dirs.concat(files);
        });
    },
    initPath(to) {
      let repo = to.params.repo;
      let path = to.params.pathMatch;
      if (repo == undefined) {
        repo = path;
        path = "";
      }
      this.repo = repo;
      this.path = path;
      this.item = {
        repo: repo,
        dir: path,
      };
      this.getContents();
    },
    outLogin() {
      Cookies.remove("user");
      Cookies.remove("token");
      this.$router.push("/login");
    },
  },
  computed: {
    ...mapGetters(["owner", "avatar_url"]),
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