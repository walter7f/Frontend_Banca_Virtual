
<template>
<div class="delSidevar">
  <div class="hijodelSide">
    <h1>Create New Account</h1>
    <form @submit.prevent="handleForm">

      <div class="mb-3">
        <label for="accountNumber" class="form-label">Numero de Cuenta:</label>
        <input
          v-model="dataAccount.account_number"
          name="account_number"
          type="text"
          class="form-control"
          id="account_number"
          placeholder="Ingrese Numero de cuenta"
        />
      </div>

      <div class="mb-3">
        <label for="bankName" class="form-label">Nombre del Banco:</label>
        <input
          v-model="dataAccount.name_bank"
          name="name_bank"
          type="text"
          class="form-control"
          id="name_banck"
          placeholder="@Nombre del Banco"
        />
      </div>

      <div class="mb-3">
        <label for="accountBalance" class="form-label">Saldo de Cuenta:</label>
        <input
          v-model="dataAccount.balance"
          name="balance"
          type="text"
          class="form-control"
          id="balance"
          placeholder="Saldo de la cuenta"
        />
      </div>

      <button type="submit" class="btn btn-primary">Create Account</button>

    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default{
    name:'NuevaCuenta',
    data() {
    return {
        dataAccount: {
        account_number: '',
        name_bank: '',
        balance: '',
        currency: 'GTQ',
        id_user:localStorage.getItem('id')
      }
    };
  },
  methods: {
    async handleForm() {
      try {
        // Hacer la solicitud POST a la API
        const response = await axios.post('http://localhost:3800/api/budget-management/account', this.dataAccount);

        // Manejar la respuesta según sea necesario
        console.log('Respuesta del servidor:', response.data);

        // Limpiar el formulario después de un envío exitoso
        this.clearForm();
      } catch (error) {
        console.error('Error al crear la cuenta:', error);
      }
    },
    clearForm() {
      // Limpiar los campos del formulario
      this.dataAccount.account_number = '';
      this.dataAccount.name_bank = '';
      this.dataAccount.balance = '';
    }
  }
}
</script>

<style>
.delSidevar{
    display: flex;

flex-dirección: columna;

justify-content: center;
}
.hijodelSide{
  color: aliceblue;
 width: 40%;
 margin-left: 15rem;
 margin-top: 5rem;
}
</style>