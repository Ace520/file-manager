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
      :centered="true"
      :maskClosable="false"
      :keyboard="false"
      :width="800"
      class="modal-body-p-0"
    >
      <a-spin :spinning="spinning">
        <div style="height: 75vh" class="flex flex-col">
          <a-input
            placeholder="地址"
            v-model="newFilePath"
            class="border-none px-6 my-1"
          />
          <iframe
            class="flex-1 w-full"
            ref="aceEditor"
            :src="
              'https://ace520.github.io/ace?theme=twilight&fontSize=15&mode=' +
              mode
            "
            frameborder="no"
            border="0"
            marginwidth="0"
            marginheight="0"
            scrolling="no"
            allowtransparency="yes"
          ></iframe></div
      ></a-spin>
    </a-modal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Base64 from "js-base64";
export default {
  name: "editor",
  props: ["item", "show"],
  data: () => ({
    visible: false,
    confirmLoading: false,
    content: "",
    newFilePath: "",
    newItem: {},
    mode: "",
    spinning: false,
  }),
  watch: {
    show: function () {
      this.spinning = true;
      this.visible = true;
    },
  },
  mounted() {
    window.addEventListener(
      "message",
      (event) => {
        let data = event.data;
        console.log(data);
        switch (data.method) {
          case "change":
            this.content = data.content;
            break;
          case "setValue":
            this.spinning = false;
            break;
          case "onload":
            this.newItem = this.item;
            this.newFilePath =
              this.newItem.path != undefined
                ? this.newItem.path
                : this.newItem.dir + "/";
            this.getContent();
            break;
        }
      },
      false
    );
  },
  methods: {
    handleOk() {
      this.confirmLoading = true;
      this.octokit
        .request("PUT /repos/{owner}/{repo}/contents/{path}", {
          owner: this.owner,
          repo: this.newItem.repo,
          path: this.newFilePath,
          message: "put content",
          content: Base64.encode(this.content),
          sha: this.newItem && this.newItem.sha ? this.newItem.sha : "",
        })
        .then(() => {
          this.visible = false;
          this.confirmLoading = false;
        });
    },
    handleCancel() {
      this.visible = false;
    },
    getContent() {
      if (this.newItem && this.newItem.name) {
        this.octokit
          .request("GET /repos/{owner}/{repo}/contents/{path}", {
            owner: this.owner,
            repo: this.newItem.repo,
            path: this.newItem.path,
          })
          .then((res) => {
            let text = Base64.decode(res.data.content);
            this.setContent(text);
          });
      } else {
        this.setContent("");
      }
    },
    setContent(text) {
      this.$refs.aceEditor.contentWindow.postMessage(
        {
          method: "setValue",
          content: text,
        },
        "*"
      );
    },
  },
  computed: {
    ...mapGetters(["owner"]),
  },
};
</script>