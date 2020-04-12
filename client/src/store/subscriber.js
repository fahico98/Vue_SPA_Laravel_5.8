
import store from "./index";
import axios from "axios";

store.subscribe((mutation) => {
   switch(mutation.type){
      case "auth/setToken":
         // In Axios you can specify config defaults that will be applied to every request...
         // Ref -> https://github.com/axios/axios
         if(mutation.payload){
            axios.defaults.headers.common["Authorization"] = "Bearer " + mutation.payload;
            localStorage.setItem("token", mutation.payload);
         }else{
            axios.defaults.headers.common["Authorization"] = null;
            localStorage.removeItem("token");
         }
         break;
   }
});
