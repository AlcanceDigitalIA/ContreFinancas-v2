<template>
  <div class="home">
    <div class="container">
      <h1>Bem-vindo ao ContreFinanças 🎉</h1>
      <p>Sua plataforma de gestão financeira inteligente</p>
      <div class="modules">
        <div class="module" @click="$router.push('/gamification')">
          <h3>🎮 Gamificação</h3>
          <p>Ganhe pontos e badges</p>
        </div>
        <div class="module" @click="$router.push('/ai-advisor')">
          <h3>🤖 IA Assistant</h3>
          <p>Chat inteligente</p>
        </div>
        <div class="module" @click="$router.push('/reports')">
          <h3>📊 Relatórios</h3>
          <p>Análise completa</p>
        </div>
        <div class="module" @click="$router.push('/bank')">
          <h3>🏦 Banco</h3>
          <p>Integração bancária</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.modules {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.module {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.module:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.module h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.module p {
  font-size: 0.9rem;
  margin: 0;
}
</style>
