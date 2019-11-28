<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
#tab-bar {
  display: flex;
  position: fixed;
  background-color: aliceblue;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -2px 2px rgba(207, 178, 178, 0.2);
  font-size: 14px;
}
</style>