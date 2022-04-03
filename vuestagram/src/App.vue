<template>
  <div class="header">
    <ul class="header-button-left" @click="step--">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>


  <button @click="getData">더보기</button>


  <ContainerView
    :postData="postData"
    :uploadImgUrl="uploadImgUrl"
    :step="step"
    @write="write = $event"
  />

  <button @click="more">More..</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import ContainerView from "./components/ContainerView.vue";
import axios from "axios";
import {mapState,mapMutations, mapActions} from 'vuex'


export default {
  name: "App",
  data() {
    return {
      postData: this.$store.state.postData,
      moreCnt: 0,
      step: 3,
      uploadImgUrl: '',
      write: '',
      appliedFilter : '',
    };
  },
  mounted(){
    this.emitter.on('sendFilter', (filterName)=>{
      this.appliedFilter = filterName;
    })
  },
  components: {
    ContainerView,
  },
  computed : {
    ...mapState(['name']),
    ...mapState({
       작명 : 'name'
       }),
  },
  methods: {
    ...mapMutations(['setMore','likesUp']),
    ...mapActions(['getData']),
    more() {
      //post는 이렇게 사용가능
      // axios.post('URL', {name : 'kim'}).then().catch((err) => {
      //   console.log(err);
      // })
      axios
        .get(`https://codingapple1.github.io/vue/more${this.moreCnt}.json`)
        //파라미터가 하나일 경우 arrow function 의 소괄호 생략 가능하다. (e)=> ,,, e =>
        .then((result) => {
          console.log(result);
          this.postData.push(result.data);
        })
        .catch(() => {
          console.log("문제가 발생했어요.");
        });
      this.moreCnt++;
    },
    upload(e) {
      let file = e.target.files;
      let url = URL.createObjectURL(file[0]);
      this.uploadImgUrl = url;
      this.step++;
    },
    publish() {
      let myPosting = {
        name: "HandSome Kim",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.uploadImgUrl,
        likes: 999,
        date: "Apr 20",
        liked: false,
        content: this.write,
        filter: this.appliedFilter,
      };

      this.postData.unshift(myPosting);
      this.step = 0;
    },
  },
};
</script>

<style>
@import "style.css";
</style>
.
