import {createStore} from 'vuex'
import postData from './assets/postData.js'
import axios from 'axios'

const store = createStore({
    state() {
        return{
            postData : postData,
            more : {},
        }
    },
    mutations : {
        setMore(state, moreData) {
            state.more = moreData;
            state.postData.unshift(state.more);
        },
        likesUp(state, dataIdx){
            if(state.postData[dataIdx].liked == false){              
                state.postData[dataIdx].liked = true;
                state.postData[dataIdx].likes++;
                return;
            }

            if (state.postData[dataIdx].liked == true){
                state.postData[dataIdx].liked = false;
                state.postData[dataIdx].likes--;
                return;
            }
        }
    },
    actions: {
        getData(context){
            axios.get('https://codingapple1.github.io/vue/more0.json').then((moreData)=>{
                context.commit('setMore',moreData.data)
            })
        }
    },
})

export default store;