<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <v-card>
          <v-card-title>
            Workshop 3:
            <v-card-subtitle>v-for </v-card-subtitle>
          </v-card-title>
          <v-card-text>
            1. Create a variable called backpack and fill it with items
          </v-card-text>
          <v-card-text>
            2. Create a new v-list item in the v-list below
          </v-card-text>
          <v-card-text>
            3. Create a v-for statement to loop through each item in the
            backpack on your new v-list item
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-list>
          <v-list-item v-for="grocery in groceryCart" :key="grocery">
            {{ grocery }}
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Workshop1",

  data: () => ({
    groceryCart: ["apple", "orange", "grape", "banana"],
  }),
  methods: {},
};
</script>
