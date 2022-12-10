<template>
  <div class="w-[240px] h-[600px] mr-[20px] rounded-lg bg-linear">
    <div class="py-5 px-[18px] border-b border-[#FFFFFF12]">
      <Text class="text-base">Sort Result By</Text>
    </div>
    <div class="p-[18px] border-b border-[#FFFFFF12]">
      <Select :value="sort" @select="handleChangeSort" :options="sortList" />
    </div>
    <div class="px-[18px] py-3 border-b border-[#FFFFFF12]">
      <Text class="text-base font-semibold">Genres</Text>
    </div>
    <div class="px-[18px] pb-[40px]">
      <div v-if="isLoading" class="flex items-center justify-center h-[100px]">
        <Loader class="w-5 h-5" />
      </div>
      <template v-else>
        <div
          v-for="genre in genreList"
          :key="genre.id"
          class="cursor-pointer py-2 flex justify-between"
          @click="handleUpdateCheck(genre)"
        >
          <Text class="text-white text-sm"> {{ genre.name }}</Text>
          <Checkbox :check="checked.includes(genre.id)" />
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import api from "~/utils/api";
import { sortList } from "~/constants";
interface IOption {
  value: String;
  label: String;
}
export default defineComponent({
  name: "Filter",
  components: {},
  props: {},
  emits: [],
  setup() {
    const isLoading = ref(true);
    const genreList = ref([]);
    const route = useRoute();
    const router = useRouter();
    const checked: any = ref([]);
    const sort = computed(() => route.query.sort || "popularity.desc");
    const handleFetchGenre = async () => {
      try {
        isLoading.value = true;
        const { data } = await api.get(`genre/movie/list`);
        genreList.value = data.genres;
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => {
      handleFetchGenre();
    });
    const handleChangeSort = (prop: IOption) => {
      router.push(`?sort=${prop.value}`);
    };
    const handleUpdateCheck = (item: any) => {
      const find = checked.value.includes(item.id);
      if (find) {
        const filtered = checked.value.filter((el: any) => el !== item.id);
        checked.value = filtered;
      } else {
        checked.value = [...checked.value, item.id];
      }
    };
    return {
      genreList,
      isLoading,
      sortList,
      sort,
      handleChangeSort,
      handleUpdateCheck,
      checked,
    };
  },
});
</script>
