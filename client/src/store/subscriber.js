
import store from "./index";
import axios from "axios";

store.subscribe((mutation) => {
   switch(mutation.type){
      case "auth/setToken":
         //console.log(mutation.payload);
         axios.defaults.headers.common["Authorization"] = mutation.payload ? "Bearer " + mutation.payload : null;
         break;
   }
});
