<template>
  <div>
    <modal name="upload-modal" width="450px" height="auto">
      <div class="border-b px-3 py-2">上传文件</div>
      <div class="py-5 px-3 flex">
        <input
          class="border w-full rounded-l py-1 px-2"
          v-model="newFilePath"
        />
        <input
          class="value"
          style="display: none"
          type="file"
          ref="file"
          @change="getFile($event)"
        />
        <button
          @click="addFile"
          class="w-24 bg-red-500 rounded-r text-white text-sm"
        >
          选择文件
        </button>
      </div>
      <div class="border-t p-3 text-right">
        <button @click="onSubmit" class="btn btn-blue">上传</button>
      </div>
    </modal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "upload",
  props: ["show"],
  data: () => ({
    content: "",
    newFilePath: "",
  }),
  watch: {
    show: function () {
      this.newFilePath = this.path ? this.path + "/" : "";
      this.$modal.show("upload-modal");
    },
  },
  mounted() {},
  methods: {
    addFile() {
      this.$refs.file.click();
    },
    getFile(event) {
      let file = event.target.files[0];
      this.newFilePath = this.newFilePath + file.name;
      let that = this;
      this.getFileBase64(file, function (base64File) {
        that.content = base64File;
      });
    },
    onSubmit() {
      this.octokit
        .request("PUT /repos/{owner}/{repo}/contents/{path}", {
          owner: this.owner,
          repo: this.repo,
          path: this.newFilePath,
          message: "put content",
          content: this.content,
        })
        .then(() => {
          this.$modal.hide("upload-modal");
        });
    },
    getFileBase64(file, fnc) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        if (typeof fnc === "function") {
          fnc(e.target.result.split(",").pop());
        }
      };
    },
  },
  computed: {
    ...mapGetters(["repo", "path"]),
  },
};
</script>