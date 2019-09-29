<template>
  <v-app>
    <b-row>
      <b-col>
        <sign-in-form class="m-5" />
      </b-col>
    </b-row>
  </v-app>
</template>

<script>
import SignInForm from '~/components/SignInForm';

export default {
    components: {
        SignInForm
    },
    // auth: false
};
</script>

<style scoped>
body{
font-family: 'Roboto Slab', serif;
}
</style>
