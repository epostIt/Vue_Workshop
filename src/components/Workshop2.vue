<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <v-card>
          <v-card-title>
            Workshop 2:
            <v-card-subtitle> Computed Methods and v-model </v-card-subtitle>
          </v-card-title>
          <v-card-text>
            1. Create data variables for the first and last name fields
          </v-card-text>
          <v-card-text>
            2. On each of the v-text fields, bind your variable to the input
            text using v-model
          </v-card-text>
          <v-card-text>
            3. In the computed section, write a method that returns the
            concatenated first and last name
          </v-card-text>
          <v-card-text>
            4. Call the computed method on line 36(ish) between the mustache
            brackets
          </v-card-text>
          <v-row align-content="center">
            <v-col cols="6">
              <v-text-field label="First Name"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Last Name"></v-text-field>
            </v-col>
          </v-row>
          <v-card-text> Your full name is: {{}} </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Workshop2",

  data: () => ({}),
  computed: {},
  methods: {},
};
</script>
