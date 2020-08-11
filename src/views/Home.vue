<template>

  <b-container class="view" fluid="100%">
    <div class="content">
    <b-row>
      <b-col lg="12" md="12" sm="6">
        <h3>Welcome</h3>
      </b-col>
      <b-col lg="12" md="12" sm="6">
        <h2>Station The Food</h2>
      </b-col>
      <b-col lg="12" md="12" sm="6">
        <button class="btn btn-success" ><router-link to="/menu" style="text-decoration: none; color:white;">View Menu</router-link></button>
      </b-col>
    </b-row>
    <!-- <b-row>
      <b-col lg="12" md="12" sm="6">
        <h2>Station The Food</h2>
      </b-col>

    </b-row>
    <b-row>
      <b-col lg="12" md="12" sm="6">
        <button class="btn btn-success" ><router-link to="/menu" style="text-decoration: none; color:white;">View Menu</router-link></button>
      </b-col>
    </b-row> -->
    

  </div>

  </b-container>

  
</template>

<script>
// @ is an alias to /src

export default {
  
}
</script>

<style scoped>



.view {
    
  background-image: url('../assets/bg.png');
  height: 100vh; 
  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover;
  text-align: center;
  /* margin: 15px; */
  /* padding-top: 15%; */
  color: white;
  

}

.content {
  padding: 15%;
  text-align: center;
  padding-top: 15%;
  color: white;
  
}

.view h3{
  color: yellow;
  font-style: italic;
  font-family: sans-serif;
  font-size: 30px;
}

.view h2 {
  font-size: 50px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

/* button {
  margin-top: 30px;
} */




</style>
