<template>
  <section class="seccion1">
    <h1 class="titulo">
      DESARROLLO DE SITIOS WEB PARA HACER TU NEGOCIO Y DAR IMAGEN A TU MARCA
    </h1>

    <h4 class="subtitulo">
      En nuestra mente existe un mundo de posibilidades, solo debemos crearlas
      de adentro hacia afuera y así materializar nuestros proyectos
    </h4>

    <div class="contItems">
      <div class="wrapItems">
        <i></i>
        <p>Diseño Web</p>
      </div>
      <div class="wrapItems">
        <i></i>
        <p>Interfaz de Usuario (UI/UX)</p>
      </div>
      <div class="wrapItems">
        <i></i>
        <p>Aplicacion Web</p>
      </div>
      <div class="wrapItems">
        <i></i>
        <p>Diseño de banners</p>
      </div>
      <div class="wrapItems">
        <i></i>
        <p>Desarrollo Web Responsive</p>
      </div>
    </div>
    <a class="contactanos" href="#"> Contactanos ya! </a>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.seccion1 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  flex-direction: column;
  width: 100%;
  height: 45rem;
  background: url("./../../assets/img/fondo4.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  .titulo {
    font-size: 2rem;
    margin-top: 5rem;
    margin-bottom: 4rem;
    text-align: center;
    color: white;
  }
  .subtitulo {
    text-align: center;
    color: white;
    font-size: 1.2rem;
  }
  .contItems {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    width: 40rem;
    height: 15rem;
    background: #fff;
    .wrapItems {
      font-weight: 700;
    }
  }
  .contactanos {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18rem;
    height: 3rem;
    margin-top: 2rem;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    font-size: 2rem;
    background: rgba(30, 200, 211, .0);
    border: .3rem solid #fff;
    border-radius: 1rem;
    transition: 1s;
    &:hover {
      color: white;
      background: rgba(30, 100, 181, .8);
      border: .3rem solid rgba(30, 100, 181, .6);
    }
  }
}
</style>
