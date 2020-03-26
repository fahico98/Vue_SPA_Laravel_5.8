
<template>
   <div id="app">
      <Navigation/>
      <div class="mt-5">
         <router-view/>
      </div>
   </div>
</template>

<script>
   import Navigation from "./components/NavigationComponent";
   export default {
      components: {
         Navigation
      }
   }
</script>
