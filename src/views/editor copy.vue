<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <div class="flex items-center">
        <md-field class="m-0 pt-2">
          <md-input class="px-2" v-model="path"></md-input>
        </md-field>
        <md-button class="md-raised md-primary" @click="onSubmit"
          >保存</md-button
        >
      </div>
      <iframe
        class="container"
        style="height: 85vh; width: 45rem"
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
    </md-dialog>
  </div>
</template>
<script>
import axios from "axios";
import { encode } from "js-base64";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "editor",
  props: ["show", "item"],
  data: () => ({
    showDialog: false,
    content: "",
    path: "",
  }),
  watch: {
    show: function () {
      this.showDialog = true;
      this.path = this.activePath + "/";
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
    ...mapActions(["fileUploadTask"]),
    onSubmit() {
      this.fileUploadTask({
        message: "updated",
        path: this.path,
        content: encode(this.content),
        sha: this.item && this.item.sha ? this.item.sha : "",
      });
      this.showDialog = false;
    },
    loading() {
      if (this.item.download_url) {
        this.path = this.item.path;
        axios({
          method: "get",
          url: this.item.download_url,
        }).then((res) => {
          let text = res.data;
          text = text.toString();
          this.$refs.aceEditor.contentWindow.postMessage(
            [
              {
                method: "setValue",
                content: text,
              },
            ],
            "*"
          );
        });
      }
    },
  },
  computed: {
    ...mapGetters(["fileUploadTaskData", "activeFilePathData"]),
    activePath() {
      return this.activeFilePathData[this.activeFilePathData.length - 1].path;
    },
  },
};
</script>