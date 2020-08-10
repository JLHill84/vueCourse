<template>
  <div>
    <h3>Some User Details</h3>
    <p>user ID: {{ $route.params.id }}</p>
    <router-link tag="button" :to="link" class="btn btn-primary"
      >edit user</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: {
          id: this.$route.params.id,
        },
        query: {
          locale: "en",
          q: 100,
        },
        hash: "#data",
      },
    };
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
};
</script>
