<template>
<div>
    <div class="container">
        <h1>Realizar Transaccion</h1>
    <form class="row g-2" style="justify-content: center;">
     <div class="col-md-5">
      <label for="validationServer02" class="form-label">Cuenta a Debitar </label>
      <div>
      <select v-model="seleccion1" @change="handleChange"  class="form-control is-valid">
      <option value="" disabled>Selecciona una cuenta a debitar</option>
      <option v-for="cuenta in dataCuenta" :key="cuenta.id" :value="cuenta.id">{{ cuenta.account_number+" "  }} {{ " @ "+cuenta.name_bank }}</option>
    </select>
  </div>
  </div>
  <div class="col-md-5">
    <label for="validationServer02" class="form-label">Cuenta a Creditar</label>
    <div>
      <select v-model="selelccion2" @change="handleChange"  class="form-control is-valid">
      <option value="" disabled>Selecciona una cuenta a debitar</option>
      <option v-for="cuenta in dataCuenta" :key="cuenta.id" :value="cuenta.id">{{ cuenta.account_number+" "  }} {{ " @ "+cuenta.name_bank }}</option>
    </select>
    </div>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  
  <div class="col-md-5">
    <label for="validationServer04" class="form-label">Cantidad a debitar</label>
    <input type="text"
    name="cantidad"
    id="cantidad"
    v-model="cantidad"
    placeholder="Ingrese monto a debitar"
     class="form-control">
  </div>
  <div class="col-md-5">
    <label for="validationServer05" class="form-label">Descripcion de Transaccion</label>
    <input type="text"
    v-model="descripcion"
    name="descripcion"
    id="descripcion"
    placeholder="@ Añada descripcion"
    class="form-control">
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Realizar Transferencia</button>
  </div>
</form>
    </div>

    {{ "id: "+seleccion }}
</div>
</template>
<script>
import axios from 'axios';
export default{
    name:'Transferencia',
    data(){
        return{
            dataCuenta:[],
            seleccion1:"",
            selelccion2:"",
        }
    },
    created(){
        this.getcuenta();
    },
    methods:{
        async getcuenta(){
      const id= localStorage.getItem('id')
      console.log(id);
      try {
        const response = await axios.get(`http://localhost:3800/api/budget-management/account/${id}`);
        this.dataCuenta = response.data;
        console.log(this.dataCuenta);
      } catch (error) {
        console.error();
      }
    },
    handleChange() {
      console.log('Cuenta seleccionada:', this.seleccion);
      // Aquí puedes realizar acciones adicionales al cambiar la selección
    },
    },
}
</script>

<style>
.container{
    background-color: white;
    width: 50%;
    height: 21rem;
    border-radius: 10px;
}
</style>