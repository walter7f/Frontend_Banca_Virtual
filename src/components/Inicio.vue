<template>

<div class="container" v-for="item in apiData" :key="item.id"> 
    <div class="card text-center item">
    <div class="card-header" style="display: flex;">
           <h1>Cuenta Monetaria:    </h1>{{  " " }}
           <h1>{{ item.name_bank }}</h1>
        </div>
        <div class="card-body">
            <div style="display: flex; justify-content: center;">
            <h2 class="card-title">Cuenta: </h2> <h3> {{ item.currency }} {{ item.account_number }}</h3>
            </div>
            <p class="card-text">Saldo Actual: {{ item.balance }}</p>
            <a href="#" class="btn btn-primary" @click="eliminarCuenta(item.id)">Eminar Cuenta</a>
        </div>
        <div class="card-footer text-muted">
            Banking Send no se hace responsabla de las lisitaciones que el usuario pueda cometer
        </div>
    </div>

</div>


</template>
<script>
import axios from 'axios';

export default{
    name:'Inicio',
    data(){
        return{
            apiData:[],
        }
    },
    created(){
        this.fetchData();
    },
    methods:{
        async fetchData(){
      const id= localStorage.getItem('id')
      try {
        const response = await axios.get(`http://localhost:3800/api/budget-management/account/${id}`);
        this.apiData = response.data;
        //  console.log(this.apiData);
      } catch (error) {
        console.error();
      }
    },
    async eliminarCuenta(id) {
      try {
        await axios.delete(`http://localhost:3800/api/budget-management/account/${id}`);
        // Después de eliminar, actualiza la lista de datos
        await this.fetchData();
        console.log('Cuenta eliminada exitosamente.');
      } catch (error) {
        console.error(error);
      }
    },
    },

}
</script>

<style>
.container{

}
.item{

    margin-bottom: 10%;
}
</style>