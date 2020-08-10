<template>
  <div>
    <h3>Edit the User</h3>
    <p>locale: {{ $route.query.locale }}</p>
    <p>q: {{ $route.query.q }}</p>
    <hr />
    <button class="btn btn-primary" @click="confirmed = true">confirm</button>
    <div style="height: 700px;"></div>
    <p id="data">extra data and stuff</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      confirmed: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      console.log("confirmed");
      next();
    } else {
      if (confirm("you sure?")) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>
