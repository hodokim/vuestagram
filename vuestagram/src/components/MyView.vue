<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{ follower }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "myView",
  setup() {
    let follower = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((rtv) => {
        follower.value = rtv.data;
      });
    });

    return { follower };
  },
};
</script>

<style></style>
