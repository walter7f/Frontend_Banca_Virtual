<template>
  <div class="container">
         <div class="row">
             <div class="col-lg-4">
                 <div class="card">
                     <div class="card-header bg-primary">
                         <h3 class="text-center">Transaccion</h3>
                     </div>
                     <div class="card-body">
                         <form class="row g-2" style="justify-content: center;">
                         <!-- <form action="" method="post"> -->
 
                            <div class="form-group">
                                 <label for="">No. Cuenta</label>
                                 <input type="hidden" name="idp" id="idp" value="">
                                 <input type="text" name="No. Cuenta" id="No. Cuenta" placeholder="No. Cuenta">
                             </div>
                             <div class="form-group">
                                 <label for="">Monto</label>
                                 <input type="text" name="Monto" id="Monto" placeholder="Monto">
                             </div>
                             <div class="form-group">
                                 <label for="">Descripcion P</label>
                                 <input type="text" name="precio" id="Descripcion" placeholder="Descripcion">
                             </div>
    
                             <div class="form-group">
                                 <input type="button" value="Registrar" id="registrar" class="btn btn-primary btn-block">
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
