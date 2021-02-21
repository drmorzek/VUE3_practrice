<template>
  <div class="card">
      <h1 class="card-title">
          {{ title }}
          <slot name="header" />
      </h1>

      <slot />
  </div>
</template>

<script>
import { computed, watch } from 'vue'

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props){
    document.title = `${props.title} | Клон банка`
  }
}
</script>

<style>

</style>