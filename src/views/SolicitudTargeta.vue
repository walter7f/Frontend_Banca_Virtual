<template>
    
    <div class="container">
        <h1>Solicitud una nueva tarjeta</h1>
        <div class="row">
            <div class="col">
                <div class="sahdow-lg p-3 mb-5 mt-4 bg-body rounden">
                    <form class="row g-3 needs-validation" movalidate>
                       <div class="col-md-4">
                          <label for="nombre" class="form-label">Nombre</label>
                          <input id="nombre" name="nombre" type="text" class="form-control" required>  
                       </div>
                       <div class="col-md-4">
                        <label for="nombre" class="form-label">Monto a solicitar</label>
                        <input id="monto" name="monto" type="text" class="form-control" required>
                       </div>
                       <div class="col-md-3">
                        <label for="tipotarjeta"> Tipo de tarjeta</label>
                        <select name="tipo tarjeta" id="tipo tarjeta" class="form-select" required>
                            <option selected disabled value="">Seleccione</option>
                            <option >Tarjeta de Credito</option>
                            <option >Tarjeta de Ahorro</option>
                        </select>
                       </div>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'SolicitudTargeta'
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
