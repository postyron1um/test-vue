<template>
  <div class="pagination">
    <my-button
      :button-class="['pagination-button', { 'pagination-button--disabled': currentPage === 1 }]"
      @click="prevPage"
    >
      Previous
    </my-button>
    <my-button
      v-for="pageNumber in pageNumbers"
      :key="pageNumber"
      :button-class="['pagination-button', { 'pagination-button--active': pageNumber === currentPage }]"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </my-button>

    <my-button
      :button-class="['pagination-button', { 'pagination-button--disabled': currentPage === totalPages }]"
      @click="nextPage"
    >
      Next
    </my-button>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
	name: 'my-pagination',
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const pageNumbers = computed(() => Array.from({ length: props.totalPages }, (_, i) => i + 1));

    const prevPage = () => {
      if (props.currentPage > 1) {
        emit('page-change', props.currentPage - 1);
      }
    };

    const nextPage = () => {
      if (props.currentPage < props.totalPages) {
        emit('page-change', props.currentPage + 1);
      }
    };

    const changePage = (pageNumber) => {
      emit('page-change', pageNumber);
    };

    return {
      pageNumbers,
      prevPage,
      nextPage,
      changePage,
    };
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.pagination-button {
  padding: 10px 20px;
  border: none;
  background-color: #458fdf;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pagination-button:hover {
  background-color: #0056b3;
}

.pagination-button--disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination-button--active {
  background-color: teal;
  font-weight: bold;
}
</style>
