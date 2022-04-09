<template>
  <div class="any">{{ $route.params }}</div>
</template>

<script>
export default {
  name: 'Any',
  layout: 'Default',
  middleware: ['auth'],
}
</script>
