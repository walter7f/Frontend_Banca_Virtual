<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Descubre todos los beneficios de tu banca en linea UMG
      <!-- <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>. -->
    </p>
    <!-- <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
    </ul> -->
  </div>

  
<div class="content-img">

<div>
  <img src="../assets/servicios.jpg" alt="" width="150" height="75" class="img1">
  <div class="text1">
  <p>Pago de servicios</p>
  <br>
  <p>Transfiere dinero no sólo entre cuentas BAC, si no también a cualquier otro banco desde tu Banca en Línea con UNI o Transfer365</p>
  </div>
</div>  

<div>
  <img src="../assets/tarjeta.webp" alt="" width="150" height="75" class="img1">
  <div class="text1">
  <p>Pago de tarjetas</p>
  <br>
  <p>Transfiere dinero no sólo entre cuentas BAC, si no también a cualquier otro banco desde tu Banca en Línea con UNI o Transfer365</p>
  </div>
</div> 

<div>
  <img src="../assets/transferencia.png" alt="" width="150" height="75" class="img1">
  <div class="text1">
  <p>Transferencia a otros bancos</p>
  <br>
  <p>Transfiere dinero no sólo entre cuentas BAC, si no también a cualquier otro banco desde tu Banca en Línea con UNI o Transfer365</p>
  </div>
</div> 

</div>

<br>
<br>
<br>
<br>
<br>


</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  color: black;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size:large;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* Transferencias */
.content-img{
  display: flex;
  padding: 20px;
  margin-right: 10px;
  margin-left: 10px;

}

.img1{
  margin-right: 100px;
}

.text1{
  padding: 10px;
  font-size: larger;
  font-weight: 100;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-right: 90px;
}

</style>
