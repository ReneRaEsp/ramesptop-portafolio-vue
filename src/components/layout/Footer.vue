<template>
  <footer>
    <div class="contCentrado">
      <img
        class="logo"
        src="./../../assets/img/logo1.png"
        alt="logo ramsolutions footer"
      />
    </div>
    <h4>Diseñado y desarrollado por RamSolutions Web Design - 2021</h4>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 15rem;
  background: rgba(4, 50, 60, 0.9);
  .contCentrado {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12rem;
    height: 40%;
    background: #fff;
    border-radius: 0.5rem;
    .logo {
      height: 4rem;
    }
  }
  h4 {
    font-size: 1.3rem;
    color: white;
    font-weight: 900;
  }
}
</style>
