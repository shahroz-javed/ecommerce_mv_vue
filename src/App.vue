<template>
  <h1>good</h1>
  <v-app>
    <v-main>
      <v-container>
        <h1 class="text-h4 mb-4">Vuetify Working!</h1>
        <v-btn color="primary">Click me</v-btn>
        <v-btn @click="$vuetify.theme.global.name = 'dark'">Dark Mode</v-btn>
        <v-btn @click="$vuetify.theme.global.name = 'light'">Light Mode</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup></script>
<style scoped></style>
