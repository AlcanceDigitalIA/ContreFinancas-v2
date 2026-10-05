<template>
  <div class="page">
    <h1>🏦 Integração Bancária</h1>
    <div class="section">
      <h2>Conectar Conta Bancária</h2>
      <select v-model="selectedBank">
        <option value="">Selecione um banco</option>
        <option value="001">Banco do Brasil</option>
        <option value="033">Santander</option>
        <option value="104">Caixa Econômica</option>
        <option value="237">Bradesco</option>
        <option value="341">Itaú</option>
      </select>
      <input v-model="accountNumber" type="text" placeholder="Número da conta">
      <button @click="connectAccount">Conectar</button>
    </div>
    <div class="section">
      <h2>Contas Conectadas</h2>
      <div class="account" v-if="accounts.length">
        <p v-for="account in accounts" :key="account">✓ {{ account }}</p>
      </div>
      <p v-else>Nenhuma conta conectada</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const selectedBank = ref('')
const accountNumber = ref('')
const accounts = ref([])

const connectAccount = () => {
  if (selectedBank.value && accountNumber.value) {
    accounts.value.push(`${selectedBank.value} - ${accountNumber.value}`)
    accountNumber.value = ''
    selectedBank.value = ''
  }
}
</script>

<style scoped>
.page { padding: 2rem; color: white; max-width: 800px; margin: 0 auto; }
h1 { font-size: 2rem; margin-bottom: 2rem; }
.section { background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem; }
h2 { margin-bottom: 1rem; }
select, input { display: block; width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: none; border-radius: 5px; }
button { padding: 0.75rem 1.5rem; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer; }
button:hover { background: #764ba2; }
.account { background: rgba(102, 126, 234, 0.3); padding: 1rem; border-radius: 5px; }
</style>
