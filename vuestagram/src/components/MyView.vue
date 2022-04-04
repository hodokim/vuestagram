<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input @input="search" placeholder="?" />

    <div v-for="item in follower" :key="item" class="post-header">
      <div class="profile" :style="{backgroundImage : `url(${item.image})`}"></div>
      <span class="profile-name" >{{ item.name }}</span>
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
    let followerOrigin = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((rtv) => {
        follower.value = rtv.data;
        followerOrigin.value = [...rtv.data];
      });
    });


    let search = (e)=>{
      let searchUser = followerOrigin.value.filter((a)=>{
        return a.name.includes(e.target.value)
      })
      follower.value = [...searchUser]
    }
 

    return { follower, search };
  },
};
</script>

<style></style>
