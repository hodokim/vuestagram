import {createStore} from 'vuex'
import postData from './assets/postData.js'

const store = createStore({
    state() {
        return{
            postData : postData,
        }
    },
    mutations : {
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
})

export default store;