<template>
  <div class="page">
    <h1>📊 Relatórios Avançados</h1>
    <div class="stats">
      <div class="stat-card">
        <h3>Renda</h3>
        <p class="value">R$ 5.000,00</p>
      </div>
      <div class="stat-card">
        <h3>Despesas</h3>
        <p class="value">R$ 2.500,00</p>
      </div>
      <div class="stat-card">
        <h3>Poupança</h3>
        <p class="value">R$ 2.500,00</p>
      </div>
      <div class="stat-card">
        <h3>Taxa de Economia</h3>
        <p class="value">50%</p>
      </div>
    </div>
    <div class="section">
      <h2>Tendência Mensal</h2>
      <p>Gráfico de evolução (implementação em progresso)</p>
    </div>
  </div>
</template>

<style scoped>
.page { padding: 2rem; color: white; max-width: 1200px; margin: 0 auto; }
h1 { font-size: 2rem; margin-bottom: 2rem; }
.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
.stat-card { background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 10px; text-align: center; }
.stat-card h3 { margin-bottom: 0.5rem; font-size: 0.9rem; opacity: 0.8; }
.value { font-size: 1.8rem; color: #ffd700; margin: 0; }
.section { background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 10px; }
</style>
