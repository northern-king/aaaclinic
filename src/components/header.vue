<template>
  <section class="hero-section">
    <carousel class="hero-items" :items="1" :nav="false" :autoplay="true">
      <div class="single-hero-items set-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span>Anti Aging & Aesthetic Clinic</span>
              <h1>
                Find the better you <br />
                in your beauty skin
              </h1>
              <div class="row flex">
                <a
                  href="../assets/treatment.pdf"
                  download="treatment.pdf"
                  class="btn-menu "
                  ><vs-button
                    size="large"
                    danger
                    :active="active == 3"
                    @click="active = 3"
                  >
                    <i class="bx bxs-book-content"></i> Menu Treatment
                  </vs-button></a
                >
                <a href="#" class="whatsapp"
                  ><vs-button size="xl" color="whatsapp" circle icon floating>
                    <i class="bx bxl-whatsapp"></i> </vs-button
                ></a>
              </div>
            </div>
            <div class="col-lg-5 banner-img">
              <img src="../assets/carousel1.png" alt="model" />
            </div>
          </div>
        </div>
      </div>
      <div class="single-hero-items set-bg background">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span>Anti Aging & Aesthetic Clinic</span>
              <h1>
                Skincare is like dieting, <br />
                you have to <br />
                invest time and effort, <br />
                there is no instant miracle
              </h1>
              <div class="row flex">
                <a href="#" class="btn-menu "
                  ><vs-button
                    size="large"
                    danger
                    :active="active == 3"
                    @click="active = 3"
                  >
                    <i class="bx bxs-book-content"></i> Menu Treatment
                  </vs-button></a
                >
                <a href="#" class="whatsapp"
                  ><vs-button size="xl" color="whatsapp" circle icon floating>
                    <i class="bx bxl-whatsapp"></i> </vs-button
                ></a>
              </div>
            </div>
            <div class="col-lg-5 banner-img">
              <img
                src="../assets/carousel2.png"
                class="carousel-two"
                alt="model"
              />
            </div>
          </div>
        </div>
      </div>
    </carousel>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "Home",
  components: {
    carousel,
  },
  data: () => ({
    active: 0,
  }),
};
</script>

<style scoped lang="scss">
.hero-section {
  height: 592px;
  background-color: #350005;
  @media (min-width: 576px) and (max-width: 812px) {
    height: 100vh;
    align-content: center;
    justify-items: center;
    justify-items: center;
  }
  @media (max-width: 575.98px) {
    align-content: center;
    justify-items: center;
    justify-items: center;
    height: 100vh;
  }

  .banner-img {
    max-width: 400px;
    position: relative;
    left: 840px;
    top: -284px;

    .banner-two {
      margin-top: -800px;
    }

    @media (max-width: 575.98px) {
      max-height: 200px;
      margin: 0;
      padding: 0;
    }
    @media (min-width: 576px) and (max-width: 811.98px) {
      max-width: 200px;
      display: none;
    }
  }

  .single-hero-items {
    margin-top: 100px;
    span {
      color: rgb(255, 160, 160);

      font-size: 18px;
      position: absolute;
      left: 240px;
      top: 150px;

      @media (max-width: 575.98px) {
        margin-left: -160px;
        font-size: 16px;
      }
    }

    h1 {
      color: #fff;
      font-size: 40px;
      font-weight: 700;
      margin-top: 200px;
      margin-left: -700px;
      @media (max-width: 575.98px) {
        font-size: 24px;
        margin-left: -1px;
      }
    }

    .btn-menu {
      color: white;
      padding: 15px 10px;
      justify-items: top;
      text-decoration: none;
      font-size: 16px;
    }

    .whatsapp {
      text-decoration: none;
      padding-top: 17px;
      @media (max-width: 575.98px) {
        padding-top: 20px;
      }
    }

    .flex {
      display: inline-flex;
      align-content: center;
      margin-left: -750px;
      @media (max-width: 575.98px) {
        margin-top: 50px;
        margin-left: -1px;
      }
    }
  }
}
</style>
