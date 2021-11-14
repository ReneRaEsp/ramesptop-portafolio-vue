<template>
  <section class="seccion1">
    <div class="contTitulo">
      <h2 class="titulo">Portafolio</h2>
    </div>
    <div class="contProyectos">
      <div class="cardProyecto">
        <img
          class="imagenProyecto"
          src="./../../assets/img/cinco.png"
          alt="card proyecto"
        />
        <p class="descripcionProyecto">
          Proyecto de ejemplo Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Illo qui fugiat hic repellendus
        </p>
      </div>
      <div class="cardProyecto">
        <img class="imagenProyecto" src="./../../assets/img/clima.png" alt="card proyecto" />
        <p class="descripcionProyecto">
          Proyecto de ejemplo Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Illo qui fugiat hic repellendus
        </p>
      </div>
      <div class="cardProyecto">
        <img class="imagenProyecto" src="./../../assets/img/catorce.png" alt="card proyecto" />
        <p class="descripcionProyecto">
          Proyecto de ejemplo Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Illo qui fugiat hic repellendus
        </p>
      </div>
      <div class="cardProyecto">
        <img class="imagenProyecto" src="../../assets/img/cotizadorseguro.png" alt="card proyecto" />
        <p class="descripcionProyecto">
          Proyecto de ejemplo Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Illo qui fugiat hic repellendus
        </p>
      </div>
      <div class="cardProyecto">
        <img class="imagenProyecto" src="../../assets/img/breakingbadfrases.png" alt="card proyecto" />
        <p class="descripcionProyecto">
          Proyecto de ejemplo Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Illo qui fugiat hic repellendus
        </p>
      </div>
      <div class="cardProyecto">
        <img class="imagenProyecto" src="../../assets/img/cuatro.png" alt="card proyecto" />
        <p class="descripcionProyecto">
          Proyecto de ejemplo Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Illo qui fugiat hic repellendus
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.seccion1 {
  height: auto;
  background: url("./../../assets/img/fondo2.jpg");
  background-attachment: fixed;
  background-size: cover;
  .contTitulo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8rem;
    //background: rgba( 30, 150, 180, .5 );
    background: rgba(3, 3, 3, 0.03);
    .titulo {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.8rem;
      border: 0rem solid rgba(233, 233, 233, 0.85);
      width: 14rem;
      height: 4rem;
      font-size: 2rem;
      color: rgba(233, 233, 233, 0.85);
      background: rgba(10, 40, 76, 0.7);
    }
  }
  .contProyectos {
    display: flex;
    justify-content: space-evenly;
    align-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    padding-bottom: 2.5rem;
    background: rgba(30, 250, 160, 0.01);
    .cardProyecto {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 22rem;
      height: 12rem;
      background: #fff;
      margin-top: 2rem;
      transition: 1s;
      cursor: pointer;
      border-radius: .6rem;
      position: relative;
      z-index: 0;
      &:hover {
        transform: scale(1.2);
      }
      .imagenProyecto {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        border-radius: .6rem;
      }
      .descripcionProyecto {
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(10, 40, 76, 0);
        width: 100%;
        height: 100%;
        font-weight: 900;
        font-size: 1.2rem;
        margin: 1.5rem;
        text-align: center;
        position: absolute;
        z-index: 3;
        border-radius: .6rem;
        transition: 1s;
        &:hover {
          background: rgba(10, 20, 36, 0.7);
          color: rgba(233, 233, 233, 0.85);
        }
      }
    }
  }
}
</style>
