<template>
  <div>
    <DetailBanner :dataMovie="dataMovie" />
    <div class="flex justify-center px-5 bg-white">
      <div class="max-w-[1200px] flex-1 flex pt-8 pb-[58px]">
        <div class="w-full">
          <div class="flex">
            <div class="w-[220px] mr-[38px]" />
            <div class="flex-1">
              <p class="text-red100 text-sm">OVERVIEW</p>
              <p class="mt-2 text-sm max-w-[526px] leading-[200%]">
                {{ dataMovie.overview }}
              </p>
            </div>
          </div>
          <p class="text-red100 text-sm mt-11">REVIEWS</p>
          <div class="mt-6 flex gap-[34px]">
            <DetailReview
              v-for="review in reviews"
              :key="review.id"
              :data="review"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center px-5">
      <div class="max-w-[1200px] flex-1 flex flex-col py-[50px]">
        <h2 class="text-white">RECOMMENDATION MOVIES</h2>
        <div class="mt-[37px] flex flex-wrap gap-[20px]">
          <MovieCard
            v-for="movie in recommendations"
            :key="movie.id"
            :data="movie"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import api from "~/utils/api";
export default defineComponent({
  name: "DetailPage",
  components: {},
  props: {},
  emits: [],
  setup() {
    const isLoading = ref(true);
    const route = useRoute();
    const dataMovie = ref({});
    const recommendations = ref([]);
    const reviews = ref([]);
    const handleFetch = async () => {
      try {
        isLoading.value = true;
        const { data } = await api.get(`movie/${route.params.id}`);
        dataMovie.value = data;
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
      }
    };
    const handleFetchRecomendation = async () => {
      try {
        const { data } = await api.get(
          `movie/${route.params.id}/recommendations`
        );

        const formated = data.results.map((el: any) => ({
          ...el,
          img_url: el.poster_path
            ? `https://image.tmdb.org/t/p/w200/${el.poster_path}`
            : null,
        }));
        recommendations.value = formated.slice(0, 5);
      } catch (error) {
        console.log(error);
      }
    };
    const handleFetchReviews = async () => {
      try {
        const { data } = await api.get(`movie/${route.params.id}/reviews`);
        reviews.value = data.results.slice(0, 2);
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(() => {
      handleFetch();
      handleFetchRecomendation();
      handleFetchReviews();
    });

    return { isLoading, dataMovie, recommendations, reviews };
  },
});
</script>
