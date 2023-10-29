<template>
<div>
    <div class="container">
        <h1>Realizar Transaccion</h1>
    <form class="row g-2" style="justify-content: center;">
     <div class="col-md-5">
      <label for="validationServer02" class="form-label">Cuenta a Debitar </label>
      <div>
      <select v-model="seleccion1" @change="handleChange"  class="form-control is-valid">
      <option value="" disabled>Selecciona una cuenta a Debitar</option>
      <option v-for="cuenta in dataCuenta" :key="cuenta.id" :value="cuenta.id">{{ cuenta.account_number+" "  }} {{ " -- "+cuenta.name_bank }}</option>
      </select>
      <div class="alert alert-primary"  v-if="seleccion1 !== ''" style="height: 2rem; margin: 0; padding: 0;" role="alert">
        <p>Saldo: {{ getSelectedCuenta().balance }}</p>
      </div>

  </div>
  </div>
  <div class="col-md-5">
    <label for="validationServer02" class="form-label">Cuenta a Creditar</label>
    <div>
      <select v-model="selelccion2" @change="handleChange2"  class="form-control is-valid">
      <option value="" disabled>Selecciona una cuenta a Acreditar</option>
      <option v-for="cuenta in dataCuenta" :key="cuenta.id" :value="cuenta.id">{{ cuenta.account_number+" "  }} {{ " -- "+cuenta.name_bank }}</option>
    </select>
    <div class="alert alert-primary"  v-if="selelccion2 !== ''" style="height: 2rem; margin: 0; padding: 0;" role="alert">
        <p>Saldo: {{ getSelectedCuenta2().balance }}</p>
      </div>
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
    v-model="debito"
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
    <button class="btn btn-primary" type="button" :disabled="parseFloat(debito) > getSelectedCuenta().balance" @click="handleUpdate">Realizar Transferencia</button>
  </div>
  <div class="alert alert-danger" v-if="parseFloat(debito) > getSelectedCuenta().balance" role="alert" style="height: 2rem; margin: 0; padding: 0;">
  La cantidad a debitar es mayor que el saldo de la cuenta.
</div>
<div v-if="transferenciaExitosa" class="alert alert-success" role="alert">
      ¡La transferencia fue exitosa!
    </div>
</form>
    </div>
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
            cantidad1:"",
            cantidad2:"",
            selelccion2:"",
            debito:'',
            id:localStorage.getItem('id'),
            transferenciaExitosa: false,
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
      console.log('Cuenta seleccionada:', this.seleccion1);
      
    },
    handleChange2() {
      console.log('Cuenta seleccionada:', this.selelccion2);
    },
    getSelectedCuenta() {
      // Encuentra la cuenta seleccionada en dataCuenta
      return this.dataCuenta.find(cuenta => cuenta.id === this.seleccion1) || {};
    },
    getSelectedCuenta2() {
      // Encuentra la cuenta seleccionada en dataCuenta
      return this.dataCuenta.find(cuenta => cuenta.id === this.selelccion2) || {};
    },
    async handleUpdate() {
    try {
      // Obtener los valores necesarios antes de las operaciones asíncronas
      const debito = parseFloat(this.debito);
      const cantidad2 = parseFloat(this.getSelectedCuenta2().balance);
      const cantidad1 = parseFloat(this.getSelectedCuenta().balance);

      console.log(debito);
      console.log(cantidad2);
      console.log(cantidad1);

      if (!isNaN(debito) && !isNaN(cantidad2) && !isNaN(cantidad1) && debito < this.getSelectedCuenta().balance) {
        // Actualizar la cuenta bancaria
        await this.UpdateAcc(this.selelccion2, { balance: cantidad2 + debito });

        // Actualizar la cuenta a debitar
        await this.UpdateAcc(this.seleccion1, { balance: cantidad1 - debito });

        // Ambas actualizaciones se completaron con éxito
        this.transferenciaExitosa = true;

          // Reiniciar la alerta después de un tiempo (por ejemplo, 5 segundos)
          setTimeout(() => {
            this.transferenciaExitosa = false;
          }, 5000);
          this.seleccion1 = "";
        this.selelccion2 = "";
        this.debito = "";
        this.descripcion = "";
        console.log('Operaciones de actualización completadas');
      }
    } catch (error) {
      console.error('Error al actualizar las cuentas:', error);
    }
  },
    async UpdateAcc(id, data) {
      try {
        const response = await axios.patch(`http://localhost:3800/api/budget-management/account2/${id}`, data);
        return response;
      } catch (error) {
        console.error('Error al actualizar la cuenta:', error);
        throw error; // Lanza el error para que pueda ser manejado por la función que llama
      }
    },
    
  }
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