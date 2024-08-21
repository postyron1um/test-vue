<template>
  <div>
    <h1 class="people-list__title">Список персонажей</h1>
    <character-table :characters="characters" />
    <my-pagination 
      :current-page="page" 
      :total-pages="totalPages" 
      @page-change="fetchPeople" 
    />
  </div>
</template>

<script>
import CharacterTable from '@/components/CharacterTable.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  components: {
    CharacterTable,
  },
  setup() {
    const characters = ref([]);
    const page = ref(1);
    const totalPages = ref(0);

    const fetchPeople = async (newPage = 1) => {
      page.value = newPage;
      const response = await axios.get(`https://swapi.dev/api/people/?page=${page.value}`);
      characters.value = response.data.results;
      totalPages.value = Math.ceil(response.data.count / 10);  
    };

    onMounted(() => fetchPeople());

    return {
      characters,
      page,
      totalPages,
      fetchPeople,
    };
  },
};
</script>
<style scoped>
.people-list__title {
	margin-bottom: 10px;
}
</style>