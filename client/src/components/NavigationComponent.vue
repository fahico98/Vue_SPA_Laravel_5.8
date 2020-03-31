
<template>

   <div>
      <b-navbar toggleable="lg" type="light" variant="warning">
         <b-container>
            <b-navbar-brand href="#">Bootstrap-Vue</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

               <!-- Right aligned nav items -->
               <b-navbar-nav class="ml-auto">

                  <template v-if="authenticated">
                     <b-nav-item :to="{name: 'Home'}">Home</b-nav-item>
                     <b-nav-item :to="{name: 'Dashboard'}">Dashboard</b-nav-item>
                     <b-nav-item :to="{name: 'Dashboard'}">{{user.name}}</b-nav-item>
                     <b-nav-item :to="{name: 'SignOut'}">Sign out</b-nav-item>
                  </template>

                  <template v-else>
                     <b-nav-item :to="{name: 'SignIn'}">Sign in</b-nav-item>
                  </template>

                  <!--
                  <b-nav-item-dropdown text="Lang" right>
                     <b-dropdown-item href="#">EN</b-dropdown-item>
                     <b-dropdown-item href="#">ES</b-dropdown-item>
                     <b-dropdown-item href="#">RU</b-dropdown-item>
                     <b-dropdown-item href="#">FA</b-dropdown-item>
                  </b-nav-item-dropdown>

                  <b-nav-item-dropdown right>
                     <template v-slot:button-content>
                        <em>User</em>
                     </template>
                     <b-dropdown-item href="#">Profile</b-dropdown-item>
                     <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                  </b-nav-item-dropdown>
                  -->

               </b-navbar-nav>
               
            </b-collapse>
         </b-container>
      </b-navbar>
   </div>
   
</template>

<script>

   import { mapGetters } from "vuex";
   
   export default {
      computed: {
         ...mapGetters({
            authenticated: "auth/authenticated",
            user: "auth/user"
         })
      }
   }

</script>
