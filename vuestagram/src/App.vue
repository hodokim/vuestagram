<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <ContainerView :postData="postData" :step="step"/>

  <button @click="more">More..</button>
  

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>






</template>

<script>
import ContainerView from "./components/ContainerView.vue";
import postData from "./assets/postData.js";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      postData: postData,
      moreCnt: 0,
      step: 0,
    };
  },
  components: {
    ContainerView,
  },
  methods: {
    more(){
      //post는 이렇게 사용가능
      // axios.post('URL', {name : 'kim'}).then().catch((err) => {
      //   console.log(err);
      // })
      axios.get(`https://codingapple1.github.io/vue/more${this.moreCnt}.json`)
      //파라미터가 하나일 경우 arrow function 의 소괄호 생략 가능하다. (e)=> ,,, e =>
      .then( result =>{
        console.log(result);
        this.postData.push(result.data);
      })
      .catch(  () => {
        console.log('문제가 발생했어요.');
      })

      this.moreCnt++;
     
    },

  }
};
</script>

<style>
@import "style.css";
</style>
.