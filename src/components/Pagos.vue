<template>
    <div class="container">
           <div class="row">
               <div class="col-lg-4">
                   <div class="card">
                       <div class="card-header bg-primary">
                           <h3 class="text-center">Pagos</h3>
                       </div>
                       <div class="card-body">
                           <form class="row g-2" style="justify-content: center;">
                           <!-- <form action="" method="post"> -->
   
                              <div class="form-group">
                                   <label for="">Cuenta a debitar</label>
                                   <select id="validationServer04" aria-describedby="validationServer04Feedback" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>Cuenta Monetaria</option>
                                    <option>Cuenta de Ahorro</option>
                                    <option>Tarjeta de Debito</option>
                                    <option>Tarjeta de Creedito</option>
                                   </select>
                               </div>
                               <div class="form-group">
                                   <label for="">No. Tarjeta a Pagar</label>
                                   <input type="text" name="No. Tarjeta a Pagar" id="No. Tarjeta a Pagar" placeholder="No. Tarjeta a Pagar">
                               </div>
                               <div class="form-group">
                                   <label for="">Nombre del Titular</label>
                                   <input type="text" name="Nombre del Titular" id="Nombre del Titular" placeholder="Nombre del Titular">
                               </div>
                               <div class="form-group">
                                   <label for="">Seleccion de moneda</label>
                                   <select  id="validationServer04" aria-describedby="validationServer04Feedback" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option> Quetzalez</option>
                                    <option>Dolares</option>
                                    <option>Euros</option>
                                   </select>
                               </div>
      
                               <div class="form-group">
                                   <input type="button" value="Realizar Pago" id="Realizar Pago" class="btn btn-primary btn-block">
                               </div>
                           <!-- </form> -->
                       </form>
                       </div>
                   </div>
               </div>
           </div>  
       
           </div>
   
   </template>
   <script>
   export default{
       name:'Transacciones'
   }
   </script>
   
   <style>
   .text-center{
    text-align: center;
       
  
  
   }
   </style>