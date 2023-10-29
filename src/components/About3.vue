<template>
<div class="principal">
    <nav class="navbar navbar-light color">
      <div class="container-fluid">
        <a class="navbar-brand rutes" href="#">

            <li class="item"><a @click="Inicio_1">INICIO</a></li>
            <!--<li><a href="#">FAVORITOS</a></li>
            <li><a href="#">TARJETAS</a></li>-->
            <li class="item"><a @click="Transferencia_2">TRANSFERENCIAS</a></li>
            <li class="item"><a @click="Transaccion_3">GESTIONES CON TARGETA</a></li>
            <li class="item"><a @click="Pagos_4">PAGOS</a></li>
            <li class="item"><a @click="Gestiones_5">GESTIONES</a></li>
            <li class="item"><a @click="logOut">CERRAR SESION</a></li>
        </a>
      </div>
    </nav>
      <div class="inicio" v-if="mov === 1">
        <div  >
        <Inicio/>
        </div>
      </div>

      <div class="inicio" v-if="mov === 2">
        <div >
       
        <Transferencia/>
        </div>
      </div>

      <div v-if="mov === 3">
        <div>
       
        <Transaccion/>
        </div>
      </div>
      <div v-if="mov === 4">
        <div>
      
        <Pagos/>
        </div>
      </div>
      <div v-if="mov === 5">
        <div>
      
        <Gestiones/>
        </div>
      </div>


</div>
<footer>
    <p>&copy; Copyright 2023 - Grupo #05</p>
  </footer>
</template>


<script>
import Transferencia from './Transferencia.vue';
import Transaccion from './Transaccion.vue';
import Pagos from './Pagos.vue';
import Inicio from './Inicio.vue';
import Gestiones from './Gestiones.vue';

export default {
name: 'About3',
components: {
    Transferencia,
    Transaccion,
    Pagos,
    Inicio,
    Gestiones
},
  data() {
    return {
      mov: 1,
    };
  },

  methods: {
    Inicio_1() {
      this.mov = 1;
    },
    Transferencia_2() {
      this.mov = 2;
    },
    Transaccion_3() {
    this.mov = 3;
    },
    Pagos_4() {
    this.mov = 4;
    },
    Gestiones_5() {
    this.mov = 5;
    },
    logOut(){
        localStorage.clear();
    },
    
  },
}
</script>
<style>
.principal{
  max-width: 100%; 
  margin: 0 auto; 
  height: auto; /* Altura fija, puedes ajustar el valor según tus necesidades */
  min-height: 91vh;
  background-color: rgb(35, 34, 34);  
  background-size: 100px;
  
}
.rutes{
 display: flex;
 justify-content:space-between; 
 align-items: center;
 margin-left: 20%;
 margin-right: 50%;

}
.item{ 
 margin: 10px 20px 10px  20px;
 color: goldenrod;
 font-size: 20px;
}
.color{
  background-color: rgb(24, 23, 23);
}
.inicio{
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
}
</style>

<style>

  

</style>