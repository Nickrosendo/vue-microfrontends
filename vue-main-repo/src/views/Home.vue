<template>
  <div class="home">
    Home
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Home",
  computed: {
    ...mapGetters(['support'])
  },
  mounted(){
    if(this.support) {
      console.log('support getter', this.support)
    }
  }
};
</script>
