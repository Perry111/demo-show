<template>
  <div class="main_page">
    <section class="left_content">
      <common-aside></common-aside>
    </section>
    <section class="right_content son_fit_father">
      <common-header></common-header>
      <section class="main_content son_fit">
        <router-view />
      </section>
    </section>
  </div>
</template>

<script>
import commonAside from "@/components/commonAside.vue";
import commonHeader from "@/components/commonHeader.vue";
export default {
  components: { commonAside, commonHeader },
};
</script>

<style scoped>
.main_page {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.left_content {
  width: fit-content;
  /* max-width: 200px; */
  background: gray;
}

.right_content {
  flex: 1;
  overflow-x: hidden;
}

.main_content {
  padding: 10px;
  background: #e9ecef;
  overflow: auto;
}

.main_content > div {
  background: #fff;
}
</style>