<template>
  <div class="about">
    <h1></h1>
    
   </div>
</template>

<script setup>
import { ref } from 'vue';
  const array = ref()
  
    
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
table {
  color: #000000;
	width: 100%;
	margin-bottom: 20px;
	border: 1px solid #000000;
	border-collapse: collapse;
  background-color: #dddddd; 
}
table th {
	font-weight: bold;
	padding: 5px;
	background: #000000;
	border: 1px solid #dddddd;
}
table td {
	border: 1px solid #000000;
	padding: 5px;
}
</style>
