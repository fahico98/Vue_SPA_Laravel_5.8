
<template>
   <div>
      <b-container>
         <b-row>
            <b-col sm="12" md="6" class="mx-auto">
               <b-form @submit.prevent="submit">
                  
                  <b-form-group label="Email address:" label-for="inputEmail">
                     <b-form-input id="inputEmail" v-model="form.email" type="email" required
                        placeholder="example123@example.com"></b-form-input>
                  </b-form-group>

                  <b-form-group label="Password:" label-for="inputPassword">
                     <b-form-input id="inputPassword" v-model="form.password" type="password" required
                        placeholder="password"></b-form-input>
                  </b-form-group>

                  <b-button type="submit" variant="warning" class="mt-2">Submit</b-button>

               </b-form>
            </b-col>
         </b-row>
      </b-container>
   </div>
</template>

<script>
   import axios from "axios";
   export default {
      data() {
         return {
            form: {
               email: '',
               password: ''
            }
         }
      },
      methods: {
         async submit(){
            let response = axios.post("/auth/signin", this.form);
            console.log(response);
         }
      }
  }
</script>

