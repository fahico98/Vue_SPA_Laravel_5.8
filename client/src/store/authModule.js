
import axios from "axios";

export default{
   namespaced: true,
   state: {
      token: null,
      user: null
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
         dispatch("attempt", response.data.token);
      },
      async attempt({commit}, token){
         commit("setToken", token);
         try{
            let response = await axios("auth/me", {
               headers: {
                  "Authorization": "Bearer " + token
               }
            });
            commit("setUser", response.data);
         }catch(exception){
            commit("setToken", null);
            commit("setUser", null);
         }
      }
   }
};
