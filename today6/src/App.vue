<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body,#app{
  width:100%;
  height:100%;
}
#app>div{
   width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
footer{
  width:100%;
  height:50px;
  display:flex;
}
footer a{
  flex:1;
  text-align: center;
  line-height: 50px;
}

</style>
