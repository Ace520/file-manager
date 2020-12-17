<template>
  <div>
    <modal
      name="iframe-modal"
      width="750px"
      height="auto"
      :adaptive="true"
      :clickToClose="false"
    >
      <div
        class="bg-white flex flex-col rounded shadow-lg"
        style="height: 90vh"
      >
        <iframe
          class="flex-1 border-b rounded"
          ref="aceEditor"
          src="https://ace520.github.io/ace"
          frameborder="no"
          border="0"
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          allowtransparency="yes"
          @load="loading"
        ></iframe>
        <div class="h-12 flex-none flex items-center justify-between px-2">
          <div class="text-sm text-gray-600">/{{ item.path }}</div>
          <div>
            <button @click="hideModal" class="mr-2 btn">取消</button>
            <button @click="onSubmit" class="btn btn-blue">保存</button>
          </div>
        </div>
      </div>
    </modal>
    <modal name="add-file-modal" width="450px" height="auto">
      <div class="border-b px-3 py-2">文件名</div>
      <div class="py-5 px-3">
        <input class="border w-full rounded py-1 px-2" v-model="newFilePath" />
      </div>
      <div class="border-t p-3 text-right">
        <button @click="addFile" class="btn btn-blue">确定</button>
      </div>
    </modal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { encode, decode } from "js-base64";
export default {
  name: "editor",
  props: ["item", "show"],
  data: () => ({
    content: "",
    newFilePath: "",
    newItem: {},
  }),
  watch: {
    show: function () {
      this.newItem = this.item;
      if (this.newItem && this.newItem.path) {
        this.$modal.show("iframe-modal");
      } else {
        this.newFilePath = this.path ? this.path + "/" : "";
        this.$modal.show("add-file-modal");
      }
    },
  },
  mounted() {
    window.addEventListener(
      "message",
      (event) => {
        let data = event.data;
        switch (data.method) {
          case "change":
            this.content = data.content;
            break;
        }
      },
      false
    );
  },
  methods: {
    addFile() {
      if (!this.newFilePath) {
        return false;
      }
      this.newItem = {
        path: this.newFilePath,
      };
      this.$modal.hide("add-file-modal");
      this.$modal.show("iframe-modal");
    },
    onSubmit() {
      this.octokit
        .request("PUT /repos/{owner}/{repo}/contents/{path}", {
          owner: this.owner,
          repo: this.repo,
          path: this.newItem.path,
          message: "put content",
          content: encode(this.content),
          sha: this.newItem && this.newItem.sha ? this.newItem.sha : "",
        })
        .then(() => {
          this.hideModal();
        });
    },
    loading() {
      if (this.newItem && this.newItem.name) {
        this.octokit
          .request("GET /repos/{owner}/{repo}/contents/{path}", {
            owner: this.owner,
            repo: this.repo,
            path: this.newItem.path,
          })
          .then((res) => {
            let text = decode(res.data.content);
            this.$refs.aceEditor.contentWindow.postMessage(
              {
                method: "setValue",
                content: text,
              },
              "*"
            );
          });
      }
    },
    hideModal() {
      this.$modal.hide("iframe-modal");
    },
  },
  computed: {
    ...mapGetters(["repo", "path"]),
  },
};
</script>