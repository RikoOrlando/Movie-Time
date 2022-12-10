<template>
  <div class="h-[531px]">
    <div
      class="mt-[50px] max-w-[1600px] ml-auto mr-auto"
      v-if="nowPlayings.length"
    >
      <Carousel :wrapAround="true" snapAlign="center" :items-to-show="2.6">
        <Slide v-for="(mov, index) in nowPlayings" :key="index">
          <HomeBannerCard :data="mov" />
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import api from "~/utils/api";
export default defineComponent({
  name: "HomeBanner",
  components: { Carousel, Slide, Pagination, Navigation },
  props: {},
  emits: [],
  setup() {
    const isLoading = ref(false);
    const nowPlayings = ref([]);
    const handleFetch = async () => {
      try {
        isLoading.value = true;
        const { data } = await api.get(`movie/now_playing`);
        const formated = data.results.map((el: any) => ({
          ...el,
          img_url: el.poster_path
            ? `https://image.tmdb.org/t/p/w200/${el.poster_path}`
            : null,
        }));
        nowPlayings.value = formated.slice(0, 10);
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
      }
    };
    onMounted(() => {
      handleFetch();
    });
    return { nowPlayings };
  },
});
</script>
<style>
.carousel__slide {
  opacity: 0.5;
}

.carousel__slide--active {
  opacity: 1 !important;
}
.carousel__pagination {
  margin-top: 50px;
}
.carousel__pagination-button::after {
  height: 12px;
  width: 12px;
  background: #ffffff80;
  border-radius: 50%;
  transition: all ease 0.3s;
}

.carousel__pagination-button--active::after {
  background: #e74c3c;
  width: 60px;
  border-radius: 20px;
}
</style>
