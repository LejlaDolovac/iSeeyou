<template>
  <div id="app">
    <div id="nav">
      <router-link class=" link" to="/">Add Celebretie</router-link>  
      <router-link class="link" to="/seen">Seen</router-link>
      <hr>
    </div>
    <router-view/>
  </div>
</template>

<style>
@media (min-width: 600px) {
  body {
    background: white;
    display: inline;
  }
}
body{
  background-color:  #BC8F8F;
  text-align: center;
  font-family: "Copperplate";

}
h1{
  color:  black;
  padding-top: 0rem;
  margin: 4rem;
  margin-top: 4rem;
  font-family: "Copperplate";
}
.link{
  color: white;
  font-size: 2rem;
  padding: 10px;
  
}
a.btn{
  text-decoration: none;
  border-radius: 999rem;
  border: 1px solid white;
  font-size: 1.3rem;
  color: #BC8F8F;
  background-color: white;
  margin: 2rem;
  position: relative;
  top: 70px;
  left: 1.2rem;

}
.btn-seen{
  text-decoration: none;
  border: 1px solid white;
  font-size: 1.3rem;
  color: #BC8F8F;
  background-color: white;
  position: relative;
  border-radius: 999rem;
  margin: 2rem;

}

input{
  background: transparent;
  padding: 1rem;
  border: 4px solid white;
  border-radius: 10rem;
  position: absolute;
  text-align: center;
  font-family: New Century Schoolbook, TeX Gyre Schola, serif;
  font-size: 1rem;
  opacity: 0.5;
  color: white;
  text-decoration: none !important;  

}
ul {
  list-style-type: none;
}
.list{
  display: relative;
  margin: -0;
}
li{
  margin: 5rem  0;

}


</style>

