<template>
  <main class="celeberty">
    <section>
      <h1>Who I Want To See</h1>
    </section>
      <section>
        <input   type="text" placeholder="Name" v-model="newCeleb.name">
        <a href="#" class="btn" @click="createCeleb">Add Celeb</a> 
      </section>
      <article>
        <section v-for="celeb in celeberty" :key="celeb._id" :celeb="celeb">
          <div>
            <ul class="list">
           <li> <p>Name: {{celeb.name}}</p></li>
          <li>  <a href="#" class="btn-seen" @click="seenCeleb(celeb)">Seen!</a></li>
            </ul>
          </div>
        </section>
      </article>
  </main>
</template>

<script>

export default {
  name: 'celeberty',
  beforeMount() {
    this.$store.dispatch('getCeleberty');
    this.$store.dispatch('haveSeenCelebs');
  },
  data() {
    return {
      newCeleb: {
        name: "",
      }
    }
  },
  computed: {
    celeberty () {
      return this.$store.state.celeberty;
    }
  },
  methods: {

    async createCeleb() {
      console.log(this.newCeleb)
      this.$store.dispatch('createCeleberty', this.newCeleb);
      this.$store.dispatch('getCeleberty');
    },
    seenCeleb(celeb){
      console.log(celeb)
      this.$store.commit('selectedCeleb', celeb);
      this.$store.dispatch('seenCeleb');
      this.$router.push('/seen');
    },   
  },
}
</script>

<style>


</style>

