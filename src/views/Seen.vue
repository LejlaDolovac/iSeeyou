<template>
  <main>
    <section>
      <h1>Have seen</h1>
    </section>
    <article>
      <section v-for="seen in haveSeen" :key="seen._id" :seen="seen">
        <p>
          {{seen.name}}
        </p>
        <a href="#" class="btn" @click="deleteCeleb(seen)">Delete!</a>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: 'seen',
  computed: {
    haveSeen () {
      return this.$store.state.haveSeen;
    },
  },
  methods: {
    deleteCeleb (seen) {
      this.$store.dispatch('deletedCeleb', seen);
      setTimeout(() => this.$router.push({
        path: '/'
      }), 750);
    }
  },
}
</script>

<style>



</style>
