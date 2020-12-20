<template>
  <div>
    <a-modal
      title="编辑"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
      okText="提交"
      cancelText="取消"
      centered
      :maskClosable="false"
      :keyboard="false"
      :width="800"
    >
      <a-spin :spinning="spinning">
        <div style="height: 75vh" class="flex flex-col">
          <a-input placeholder="地址" v-model="path" />
          <div class="py-3 flex">
            <a-tooltip v-for="(item, index) in tools" :key="index">
              <template slot="title"> {{ item.name }} </template>
              <a-button
                @click="clickTool(item.url)"
                size="small"
                class="flex items-center justify-center mr-2"
                shape="circle"
              >
                <img class="h-4 rounded-full" :src="item.icon" />
              </a-button>
            </a-tooltip>
          </div>
          <overlay-scrollbars
            ref="textareaScrollbar"
            class="flex-1 border rounded"
          >
            <div class="min-h-full min-w-full" :style="'height:' + height">
              <textarea
                ref="textarea"
                class="min-h-full min-w-full overflow-hidden p-2 outline-none resize-none absolute line-height-21"
                placeholder="内容"
                v-model="content"
                :style="'height:' + height"
              ></textarea>
            </div>
          </overlay-scrollbars>
        </div>
      </a-spin>
      <tool
        :show="showTool"
        :content="content"
        :url="url"
        @change="toolChange"
      ></tool>
    </a-modal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { Base64 } from "js-base64";
import Tool from "./tool.vue";
export default {
  components: { Tool },
  name: "editor",
  props: ["item", "show"],
  data: () => ({
    visible: false,
    confirmLoading: false,
    content: "",
    path: "",
    newItem: {},
    height: "100%",
    spinning: false,
    tools: [
      {
        name: "Code编辑器",
        url: "https://ace520.github.io/ace",
        icon: require("@/assets/icon/ace.png"),
      },
      {
        name: "MD编辑器",
        url: "https://ace520.github.io/editor-md",
        icon: require("@/assets/icon/editor-md.png"),
      },
      {
        name: "百度编辑器",
        url: "https://ace520.github.io/ueditor",
        icon: require("@/assets/icon/ueditor.png"),
      },
    ],
    url: "",
    showTool: false,
  }),
  watch: {
    show: function () {
      this.height = "100%";
      this.spinning = true;
      this.newItem = this.item;
      if (this.newItem.path != undefined) {
        this.path = this.newItem.path;
      } else if (this.newItem.dir) {
        this.path = this.newItem.dir + "/";
      } else {
        this.path = "";
      }
      this.visible = true;
      this.confirmLoading = false;
      this.getContent();
    },
    content() {
      setTimeout(() => {
        this.height = this.$refs.textarea.scrollHeight + "px";
      }, 100);
    },
  },
  mounted() {},
  methods: {
    toolChange(val) {
      this.content = val;
    },
    clickTool(url) {
      this.url = url;
      this.showTool = !this.showTool;
    },
    handleOk() {
      this.confirmLoading = true;
      this.octokit
        .request("PUT /repos/{owner}/{repo}/contents/{path}", {
          owner: this.owner,
          repo: this.newItem.repo,
          path: this.path,
          message: "put content",
          content: Base64.encode(this.content),
          sha: this.newItem && this.newItem.sha ? this.newItem.sha : "",
        })
        .then((res) => {
          if (res.data.error) {
            this.$message.error(res.data.error);
            return false;
          }
          this.$message.success("上传成功");
          this.visible = false;
          this.confirmLoading = false;
        });
    },
    handleCancel() {
      this.visible = false;
    },
    getContent() {
      this.content = "";
      if (this.newItem && this.newItem.name) {
        this.octokit
          .request("GET /repos/{owner}/{repo}/contents/{path}", {
            owner: this.owner,
            repo: this.newItem.repo,
            path: this.newItem.path,
          })
          .then((res) => {
            this.content = Base64.decode(res.data.content);

            this.spinning = false;
          });
      } else {
        this.spinning = false;
      }
    },
  },
  computed: {
    ...mapGetters(["owner"]),
  },
};
</script>
<style scoped>
.line-height-21 {
  line-height: 21px;
}
</style>