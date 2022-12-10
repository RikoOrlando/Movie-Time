<template>
  <div class="relative">
    <div class="rounded bg-[#00000021] h-9 flex px-2.5 items-center">
      <img
        class="w-6 h-6 mr-3"
        fetchPriority="high"
        alt="movie"
        src="~/assets/images/movie_icon.svg"
      />
      <input
        @keyup="handleChange"
        @focus="show = true"
        @blur="handleBlur"
        v-model="search"
        class="flex-1 bg-transparent focus:outline-none text-white text-base"
      />
      <img
        class="w-4 h-4 ml-3"
        fetchPriority="high"
        alt="movie"
        src="~/assets/images/search_icon.svg"
      />
    </div>

    <div
      v-if="autoCompletes.length && show"
      class="bg-[#000000E5] rounded overflow-hidden absolute w-full"
    >
      <div
        v-for="item in autoCompletes"
        :key="item.id"
        class="py-2 px-4 cursor-pointer"
        @click="handleClickSuggestion(item)"
      >
        <Text class="text-xs" v-html="item.render"> </Text>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import api from "~/utils/api";
export default defineComponent({
  name: "Search",
  components: {},
  props: {},
  emits: [],
  setup() {
    const isLoading = ref(true);
    const search = ref("");
    const autoCompletes = ref([]);
    const bounce: any = ref(null);
    const show = ref(false);
    const router = useRouter();
    const handleFetch = async () => {
      try {
        isLoading.value = true;
        const { data } = await api.get(`search/movie`, {
          params: { query: search.value },
        });
        const results = data.results.reduce((acc: any, el: any) => {
          const lowerTitle = el.title.toLowerCase();
          const lowerKeyword = search.value.toLowerCase();
          if (lowerTitle.includes(lowerKeyword)) {
            const updated = {
              ...el,
              render: lowerTitle.replace(
                lowerKeyword,
                `<strong>${lowerKeyword}</strong>`
              ),
            };
            return [...acc, updated];
          }
          return acc;
        }, []);
        autoCompletes.value = results;
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
      }
    };

    const handleChange = () => {
      clearTimeout(bounce.value);
      bounce.value = setTimeout(() => {
        handleFetch();
      }, 300);
    };
    const handleClickSuggestion = (prop: any) => {
      search.value = prop.title;
      router.push(`/detail/${prop.id}`);
    };
    const handleBlur = () => {
      setTimeout(() => {
        show.value = false;
      }, 300);
    };
    return {
      search,
      autoCompletes,
      show,
      handleChange,
      handleClickSuggestion,
      handleBlur,
    };
  },
});
</script>
