
import store from "./index";
import axios from "axios";

store.subscribe((mutation) => {
   switch(mutation.type){
      case "auth/setToken":
         axios.defaults.headers.commun["Authorization"] = mutation.payload ?
            `Bearer ${mutation.payload}` :
            null;
         break;
   }
});
