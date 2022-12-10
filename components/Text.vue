<template>
  <p :class="color === 'secondary' ? 'text-[#929292]' : 'text-white100'">
    <slot />
  </p>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Text",
  components: {},
  props: {
    color: {
      type: String,
      required: false,
      default: () => "main",
    },
  },
  emits: [],
  setup() {
    return {};
  },
});
</script>
