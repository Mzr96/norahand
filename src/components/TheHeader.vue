<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/404">صفحه اصلی</router-link></li>
        <li><router-link to="/order-history">تاریخچه سفارشات</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<script setup></script>
<style scoped>
header {
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  margin-bottom: 2rem;
}

ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

a {
  padding: 0.5rem 1rem;
  border-radius: 6px;
}
</style>
