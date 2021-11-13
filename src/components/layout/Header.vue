<template>
  <header>
    <a href="#" class="contLogo">
      <img
        class="logo"
        src="./../../assets/img/logo1.png"
        alt="Logo Ramsolutions"
      />
    </a>
    <div class="contLinks">
      <div class="wrapLI">
        <a class="link" href="#"> Inicio </a
        ><i class="icono fas fa-house-user"></i>
      </div>
      <div class="wrapLI">
        <a class="link" href="#"> Portafolio </a
        ><i class="icono fas fa-house-user"></i>
      </div>
      <div class="wrapLI">
        <a class="link" href="#"> Contacto </a
        ><i class="icono fas fa-house-user"></i>
      </div>
      <div class="wrapLI">
        <a class="link" href="#"> Github </a
        ><i class="icono fas fa-house-user"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 5.5rem;
  background: rgba(10, 60, 80, 0.9);
  .contLogo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10.5rem;
    height: 70%;
    background: #fff;
    border-radius: 0.6rem;
    margin-left: 0.8rem;
    .logo {
      height: 80%;
    }
  }
  .contLinks {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 45%;
    height: 90%;
    background: rgba(10, 60, 80, 0);
    .wrapLI {
      display: flex;
      justify-content: space-around;
      align-items: center;

      .link {
        margin-right: 0.3rem;
        color: #fff;
        text-decoration: none;
        font-size: 1.4rem;
      }
      .icono {
        color: #fff;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  header {
    .contLinks {
      width: 70%;
    }
  }
}
</style>
