<template>
  <div class="page">
    <h1>🎮 Gamificação</h1>
    <div class="section">
      <h2>Seus Pontos: <span class="points">1.250</span></h2>
      <div class="progress-bar">
        <div class="progress" style="width: 60%"></div>
      </div>
    </div>
    <div class="section">
      <h2>Badges Conquistadas</h2>
      <div class="badges">
        <div class="badge">🏅 Iniciante</div>
        <div class="badge">💰 Economista</div>
        <div class="badge">📈 Analista</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page { padding: 2rem; color: white; max-width: 1000px; margin: 0 auto; }
h1 { font-size: 2rem; margin-bottom: 2rem; }
.section { background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem; }
h2 { margin-bottom: 1rem; }
.points { font-size: 2rem; color: #ffd700; }
.progress-bar { background: rgba(255,255,255,0.2); height: 20px; border-radius: 10px; overflow: hidden; }
.progress { background: linear-gradient(90deg, #667eea, #764ba2); height: 100%; }
.badges { display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 1rem; }
.badge { background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 5px; text-align: center; }
</style>
