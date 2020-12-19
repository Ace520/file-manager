<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
button,
input,
span {
  outline: none !important;
}
input:focus,
textarea:focus {
  outline: none;
}
.modal-body-p-0 .ant-input:hover,.modal-body-p-0 .ant-input:focus{
  border:none!important;
  box-shadow:none!important;
}
.ant-list-item-action {
  display: none;
}
.ant-list-item:hover {
  background-color: #f3f0f0;
}
.ant-list-item:hover .ant-list-item-action {
  display: block;
}
a {
  color: #2c3e50 !important;
}
.link:hover {
  text-decoration: underline;
  color: #1890ff !important;
  cursor: pointer;
}
.modal-body-p-0 .ant-modal-body {
  padding: 0;
}
</style>
