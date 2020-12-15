<template>
  <div
    v-if="showDialog"
    class="h-screen w-screen fixed inset-0 bg-black bg-opacity-25 z-10 flex items-center justify-center"
  >
    <div
      class="bg-white flex flex-col rounded shadow-lg"
      style="width: 50rem; height: 90vh"
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
      <div class="h-12 flex-none flex items-center justify-end px-2">
        <button
          @click="showDialog = false"
          class="mr-2 bg-gray-500 text-white font-bold py-1 px-4 rounded"
        >
          取消
        </button>
        <button
          @click="onSubmit"
          class="bg-blue-500 text-white font-bold py-1 px-4 rounded"
        >
          保存
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { encode, decode } from "js-base64";
export default {
  name: "editor",
  props: ["show", "item"],
  data: () => ({
    showDialog: false,
    content: "",
  }),
  watch: {
    show: function () {
      this.showDialog = true;
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
    onSubmit() {
      this.octokit
        .request("PUT /repos/{owner}/{repo}/contents/{path}", {
          owner: this.owner,
          repo: this.repo,
          path: this.item.path,
          message: "put content",
          content: encode(this.content),
          sha: this.item && this.item.sha ? this.item.sha : "",
        })
        .then(() => {
          this.showDialog = false;
        });
    },
    loading() {
      if (this.item && this.item.path) {
        this.octokit
          .request("GET /repos/{owner}/{repo}/contents/{path}", {
            owner: this.owner,
            repo: this.repo,
            path: this.item.path,
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
  },
  computed: {
    ...mapGetters(["repo", "path"]),
  },
};
</script>