<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Height</th>
        <th>Birth Year</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="character in characters" :key="character.name">
        <td>{{ character.name }}</td>
        <td>{{ character.height }}</td>
        <td>{{ character.birth_year }}</td>
        <td>{{ character.gender }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'CharacterTable',
  props: {
    characters: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

table th,
table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

table th {
  background-color: #f4f4f4;
}

</style>