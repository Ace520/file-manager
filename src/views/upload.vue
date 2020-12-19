<template>
  <div>
    <a-modal
      title="上传文件"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
      okText="上传"
      cancelText="取消"
      :centered="true"
      :maskClosable="false"
      :keyboard="false"
    >
      <a-input-search
        v-model="newFilePath"
        placeholder="file path"
        size="large"
        @search="addFile"
      >
        <a-button slot="enterButton"> 选择文件 </a-button>
      </a-input-search>
      <input
        style="display: none"
        type="file"
        ref="file"
        @change="getFile($event)"
      />
    </a-modal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "upload",
  props: ["show", "item"],
  data: () => ({
    visible: false,
    confirmLoading: false,
    newFilePath: "",
    content: "",
  }),
  watch: {
    show: function () {
      this.newFilePath = this.item.dir ? this.item.dir + "/" : this.item.dir;
      this.visible = true;
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
    handleOk() {
      this.confirmLoading = true;
      this.octokit
        .request("PUT /repos/{owner}/{repo}/contents/{path}", {
          owner: this.owner,
          repo: this.item.repo,
          path: this.newFilePath,
          message: "put content",
          content: this.content,
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
    ...mapGetters(["owner"]),
  },
};
</script>