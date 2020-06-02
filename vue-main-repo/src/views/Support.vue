<template>
  <Support /> 
</template>

<script lang="ts">
import Vue from 'vue'
import store from '../store'
import SupportPlugin from '../../../vue-support-repo/src/export';

Vue.use(SupportPlugin, { store });
export default Vue.extend({
})
</script>
