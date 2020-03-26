
<!--
<template>

   <div>
      <b-container>
         <h3>Sign in page...!</h3>
      </b-container>
   </div>
   
</template>

<script>

   export default {
      name: 'sign-in',
      components: {
         
      }
   }

</script>
-->

<template>
   <div>
      <b-container>
         <b-row>
            <b-col sm="12" md="6" class="mx-auto">
               <b-form @submit="onSubmit" v-if="show">
                  
                  <b-form-group label="Email address:" label-for="inputEmail">
                     <b-form-input id="inputEmail" v-model="form.email" type="email" required
                        placeholder="example123@example.com"></b-form-input>
                  </b-form-group>

                  <b-form-group label="Password:" label-for="inputPassword">
                     <b-form-input id="inputPassword" v-model="form.password" type="password" required
                        placeholder="password"></b-form-input>
                  </b-form-group>

                  <!--
                  <b-form-group id="input-group-4">
                     <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                        <b-form-checkbox value="me">Check me out</b-form-checkbox>
                        <b-form-checkbox value="that">Check that out</b-form-checkbox>
                     </b-form-checkbox-group>
                  </b-form-group>
                  -->

                  <b-button type="submit" variant="warning" class="mt-2">Submit</b-button>

               </b-form>
            </b-col>
         </b-row>
      </b-container>
   </div>
</template>

<script>
  export default {
      data() {
         return {
         form: {
            email: '',
            name: '',
            food: null,
            checked: []
         },
         foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
         show: true
         }
      },
      methods: {
         onSubmit(evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.form));
         },
         onReset(evt){
            evt.preventDefault();
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.food = null
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
               this.show = true
            })
         }
      }
  }
</script>

