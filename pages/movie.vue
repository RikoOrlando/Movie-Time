<template>
  <div>
    <div class="bg-[#FFFFFF0D] h-[323px]">
      <div class="flex justify-center px-5">
        <div class="max-w-[1200px] flex-1 flex pt-[70px]">
          <div class="relative">
            <div class="bg-red50 absolute h-1.5 w-[112px] -top-3" />
            <h1 class="text-white100 text-4xl">Movies</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center px-5">
      <div class="max-w-[1200px] flex-1 flex mt-[-143px]">
        <MovieFilter />
        <div class="flex-1">
          <div class="flex flex-wrap gap-x-5 gap-y-7 flex-1">
            <div
              v-if="isLoading"
              class="flex justify-center items-center h-[200px] flex-1"
            >
              <Loader />
            </div>
            <template v-else>
              <MovieCard
                v-for="movie in movies"
                :key="movie.id"
                :data="movie"
              />
            </template>
          </div>
          <div
            v-if="!isLoading"
            class="mt-[60px] mb-[90px] flex justify-center"
          >
            <Button class="w-[150px]">Load More</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, computed, watch } from "vue";
import api from "~/utils/api";
export default defineComponent({
  name: "MoviePage",
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
