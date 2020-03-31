
import axios from "axios";

export default{

   namespaced: true,

   state: {
      token: null,
      user: null
   },

   getters: {
      authenticated(state){
         return state.token && state.user;
      },
      user(state){
         return state.user;
      }
   },

   mutations: {
      setToken(state, token){
         state.token = token;
      },
      setUser(state, userData){
         state.user = userData;
      }
   },

   actions: {
      async signIn({dispatch}, credentials){
         let response = await axios.post("/auth/signin", credentials);
         return dispatch("attempt", response.data.token);
      },
      async attempt({commit}, token){
         console.log("1 -> attempt...!");
         commit("setToken", token);
         console.log("2 -> attempt...!");
         try{
            console.log("Before auth/me !");
            let response = await axios("auth/me");
            console.log(response);
            commit("setUser", response.data);
         }catch(exception){
            commit("setToken", null);
            commit("setUser", null);
         }
      }
   }
};
