<template>
  <div class="container">
    <b-carousel
      id="carousel-articles"
      v-model="slide"
      :inteval="4000"
      controls
      indicators
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding.end="onSlideEnd"
    >
      <b-carousel-slide
        caption="Poboljšajte svoje kulinarske vještine"
        text="Savladajte razne nove tehnike kuhanja, te upoznajte nove trikove koji će promijeniti način na koji kuhate!"
        img-src="https://images.pexels.com/photos/175753/pexels-photo-175753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style>
</style>
