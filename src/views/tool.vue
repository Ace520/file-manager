<template>
  <div>
    <a-modal
      :visible="visible"
      :centered="true"
      width="100%"
      class="tool-modal"
      :footer="null"
      :closable="false"
    >
      <a-button
        @click="visible = false"
        type="danger"
        shape="circle"
        icon="close"
        size="large"
        class="absolute z-10 flex items-center justify-center shadow"
        style="top: 60px; right: 20px"
      />
      <a-spin :spinning="spinning">
        <iframe
          class="h-screen w-full"
          ref="iframe"
          :src="url"
          frameborder="no"
          border="0"
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          allowtransparency="yes"
        ></iframe>
      </a-spin>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: "tool",
  props: ["content", "show", "url"],
  data: () => ({
    visible: false,
    spinning: false,
  }),
  watch: {
    show: function () {
      this.visible = true;
      this.spinning = true;
      if (this.$refs.iframe !== undefined) {
        this.setContent();
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
            this.$emit("change", data.content);
            break;
          case "setValue":
            this.spinning = false;
            break;
          case "onload":
            this.setContent();
            break;
        }
      },
      false
    );
  },
  methods: {
    setContent() {
      this.$refs.iframe.contentWindow.postMessage(
        {
          method: "setValue",
          content: this.content,
        },
        "*"
      );
    },
  },
};
</script>