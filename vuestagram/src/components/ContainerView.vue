<template>
  <div>
    <div v-if="step==0"> 
        <PostView
          :postData="postData[i]"
          v-for="(item, i) in postData"
          :key="i"
        ></PostView>
    </div>


    <!-- 필터선택페이지 -->
    <div v-if="step==1">
        <div class="upload-image" :style="{ backgroundImage : `url(${uploadImgUrl})` }"></div>
        <div class="filters">
          <FilterBox v-for="item in filterHead" :key="item" :filter="item" :uploadImgUrl="uploadImgUrl"></FilterBox>
        </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step==2">
        <div class="upload-image" :style="{ backgroundImage : `url(${uploadImgUrl})` }"></div>
        <div class="write">
          <textarea class="write-box" @input="$emit('write', $event.target.value)">write!</textarea>
        </div>
    </div>
  </div>
</template>

<script>
import PostView from "./PostView.vue";
import FilterBox from "./FilterBox.vue";
import filterData from "../assets/filterData.js";

export default {
  data() {
    return {
      filterHead : filterData,
    }
  },
  components: {
    PostView,
    FilterBox,
  },
  props: {
    postData: Array,
    step: Number,
    uploadImgUrl: String,
  },
};
</script>

<style scoped>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>
