<script setup lang="ts">
  import { useRouter } from 'vue-router'

  const router = useRouter()

  function gotoHome() {
    router.push({ path: '/' })
  }
</script>

<template>
  <div class="not-found-page">
    <div class="page-content">
      <div class="heading">ERROR</div>
      <p>This page was not found</p>

      <button @click="gotoHome()" label="Go back">Go back home</button>
    </div>
  </div>
</template>
<style scoped>
  .not-found-page {
    min-height: 100vh;
    padding: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page-content {
    text-align: center;
  }

  .heading {
    margin-bottom: 1rem;
    font-size: 6rem;
    font-weight: 700;
  }

  p {
    margin-top: 0 0 2rem 0;
    line-height: 1.5;
    font-size: 1.25rem;
  }

  button {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    font-weight: 500 !important;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: 6px;
    border: 1px solid #b6b6c2;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: 6px;
  }
</style>
