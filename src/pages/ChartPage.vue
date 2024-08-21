<template>
  <div class="chart-container">
    <h1>Диаграмма роста персонажей</h1>
    <canvas id="chart"></canvas>
  </div>
</template>
<script>
import axios from 'axios';
import { onMounted } from 'vue';
import { Chart } from 'chart.js/auto';

export default {
  setup() {
    const fetchCharactersForChart = async () => {
      const response = await axios.get('https://swapi.dev/api/people/?page=1');
      const characters = response.data.results.slice(0, 10);

      const names = characters.map((c) => c.name);
      const heights = characters.map((c) => Number(c.height));

      const ctx = document.getElementById('chart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: names,
          datasets: [
            {
              label: 'Height (cm)',
              data: heights,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };

    onMounted(fetchCharactersForChart);
  },
};
</script>
<style scoped>
.chart-container {
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

canvas {
  max-width: 100%;
}
</style>
