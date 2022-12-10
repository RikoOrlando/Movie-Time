<template>
  <button
    class="h-8 text-white100 font-semibold text-sm px-4 rounded-full"
    :class="{
      'bg-red100': variant === 'primary',
      'bg-black10': variant === 'secondary',
    }"
  >
    <slot />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
  components: {},
  props: {
    variant: {
      type: String,
      required: false,
      default: () => "primary",
    },
  },
  emits: [],
  setup() {
    return {};
  },
});
</script>
