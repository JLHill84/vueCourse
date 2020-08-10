<template>
  <div>
    <button @click="navigateToHome" class="btn btn-primary">go home</button>
    <h1>user page</h1>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
