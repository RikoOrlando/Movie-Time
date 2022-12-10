<template>
  <div>
    <div class="bg-[#FFFFFF0D] flex justify-center px-5">
      <div class="h-[333px] pt-[100px] max-w-[1200px] flex-1">
        <div class="flex flex-1 justify-between items-center">
          <div class="relative">
            <div class="bg-red50 absolute h-1.5 w-[112px] -top-3" />
            <h1 class="text-white100 text-2xl">Discover Movies</h1>
          </div>
          <div>
            <Button
              @click="handleChangeFilter('popularity.desc')"
              :variant="sort === 'popularity.desc' ? 'primary' : 'secondary'"
              class="mr-[21px]"
              >Popularity</Button
            >
            <Button
              @click="handleChangeFilter('release_date.desc')"
              :variant="sort === 'release_date.desc' ? 'primary' : 'secondary'"
              >Release Date</Button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-[-170px] pb-[115px] px-5">
      <div
        class="max-w-[1200px] flex-1 flex flex-wrap gap-x-[25px] gap-y-[27px]"
      >
        <div
          v-if="isLoading"
          class="flex justify-center items-center h-[200px] flex-1"
        >
          <Loader />
        </div>
        <template v-else>
          <MovieCard v-for="movie in movies" :key="movie.id" :data="movie" />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed, watch } from "vue";
import api from "~/utils/api";
export default defineComponent({
  name: "Discover",
  components: {},
  props: {},
  emits: [],
  setup() {
    const isLoading = ref(true);
    const movies = ref([]);
    const route = useRoute();
    const router = useRouter();
    const sort = computed(() => route.query.sort || "popularity.desc");

    const handleFetch = async () => {
      try {
        isLoading.value = true;
        const { data } = await api.get(`discover/movie`, {
          params: {
            sort_by: sort.value,
          },
        });
        const formated = data.results.map((el: any) => ({
          ...el,
          img_url: el.poster_path
            ? `https://image.tmdb.org/t/p/w200/${el.poster_path}`
            : null,
        }));
        movies.value = formated;
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
      }
    };
    watch(sort, () => {
      handleFetch();
    });
    onMounted(() => {
      handleFetch();
    });
    const handleChangeFilter = (prop: string) => {
      router.push(`?sort=${prop}`);
    };
    return { movies, sort, handleChangeFilter, isLoading };
  },
});
</script>
