<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <v-card>
          <v-card-title>
            Workshop 1:
            <v-card-subtitle>
              Data variables, methods, and conditionally rendering html
            </v-card-subtitle>
          </v-card-title>
          <v-card-text>
            1. In the script tags below in the "data" section, declare a boolean
            named "showMe" and set it to true.
          </v-card-text>
          <v-card-text>
            2. In the script tags below in the "methods" section, write a method
            named "toggleShowMe" that toggles the value of the "showMe"
            property.
          </v-card-text>
          <v-card-text>
            3. In the Template section, on line 5 add `v-if="showMe"`
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-btn @click="toggleShowMe" color="#1DE9B6">Click Me!</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Workshop1",

  data: () => ({
    testVariable: false,
  }),
  methods: {
    testMethod() {
      this.testVariable = true;
    },
  },
};
</script>
