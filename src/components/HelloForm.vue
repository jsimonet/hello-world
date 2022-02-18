<template>
  <div class="hello">
      <p>Hello from Hello Form component</p>
      <input v-model="pseudo" />
      <button @click="savePseudo">Save your pseudo</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: 'HelloForm',
  data: function() {
    return {
      pseudo: ""
    };
  },
  methods: {
      ...mapMutations(["setPseudo"]),
      savePseudo() {
          console.error("saving pseudo into store", this.pseudo);
          this.setPseudo(this.pseudo);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
