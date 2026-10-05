<template>
  <div id="app">
    <nav class="navbar">
      <h1>💰 ContreFinanças</h1>
      <ul>
        <li><router-link to="/">Dashboard</router-link></li>
        <li><router-link to="/gamification">🎮 Gamificação</router-link></li>
        <li><router-link to="/ai-advisor">🤖 IA</router-link></li>
        <li><router-link to="/reports">📊 Relatórios</router-link></li>
        <li><router-link to="/bank">🏦 Banco</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

#app {
  min-height: 100vh;
}

.navbar {
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.navbar h1 {
  font-size: 1.5rem;
}

.navbar ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.navbar a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.navbar a:hover {
  color: #667eea;
}

.navbar router-link.active {
  border-bottom: 2px solid #667eea;
}
</style>
