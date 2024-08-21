<template>
  <button :class="buttonClass" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
	name: 'my-button',
  props: {
    buttonClass: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>