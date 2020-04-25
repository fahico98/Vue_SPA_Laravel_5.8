
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

      /**
       * Las acciones reciben como parametro un objeto llamado "context" que tiene las propiedades "commit", "getters",
       * "state" y "dispatch", sin embargo, para los argumentos de las acciones "signIn", "attempt" y "signOut" se esta
       * usando la funcionalidad "Distructurin" de ES6 (ES2015).
       * 
       * Fuente: https://github.com/lukehoban/es6features#destructuring.
       */

      async signIn({dispatch}, credentials){
         let response = await axios.post("auth/signin", credentials);
         return dispatch("attempt", response.data.token);
      },

      async attempt({commit, state}, token){
         if(token){commit("setToken", token);}
         if(!state.token){return;}
         try{
            let response = await axios.get("auth/me");
            commit("setUser", response.data);
         }catch(exception){
            commit("setToken", null);
            commit("setUser", null);
         }
      },

      signOut({commit}){
         return axios.post("auth/signout")
            .then(() => {
               commit("setToken", null);
               commit("setUser", null);
            });
      }
   }
};
