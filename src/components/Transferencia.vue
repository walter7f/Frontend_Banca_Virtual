<template>
<div>
    <div class="container">
        <h1>Realizar Transaccion</h1>
    <form class="row g-2" style="justify-content: center;">
     <div class="col-md-5">
    <label for="validationServer01" class="form-label">Cuenta a Debitar</label>
    <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-5">
    <label for="validationServer02" class="form-label">Cuenta a Creditar</label>
    <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  
  <div class="col-md-5">
    <label for="validationServer04" class="form-label">Cantidad a debitar</label>
    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-5">
    <label for="validationServer05" class="form-label">Zip</label>
    <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required>
    <div id="validationServer05Feedback" class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Realizar Transferencia</button>
  </div>
</form>
    </div>
</div>
</template>
<script>
export default{
    name:'Transferencia'
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