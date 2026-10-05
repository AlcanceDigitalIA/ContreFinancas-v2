<template>
  <div class="page">
    <h1>🤖 IA Assistant</h1>
    <div class="chat-container">
      <div class="messages">
        <div class="message bot">
          <p>Olá! Sou seu assistente financeiro. Como posso ajudar?</p>
        </div>
      </div>
      <div class="input-area">
        <input v-model="message" @keyup.enter="sendMessage" placeholder="Digite sua pergunta...">
        <button @click="sendMessage">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('')
const sendMessage = () => {
  if (message.value.trim()) {
    console.log('Mensagem:', message.value)
    message.value = ''
  }
}
</script>

<style scoped>
.page { padding: 2rem; color: white; max-width: 800px; margin: 0 auto; }
h1 { font-size: 2rem; margin-bottom: 2rem; }
.chat-container { background: rgba(255,255,255,0.1); border-radius: 10px; overflow: hidden; }
.messages { height: 400px; overflow-y: auto; padding: 1rem; }
.message { margin-bottom: 1rem; padding: 0.75rem; border-radius: 5px; }
.message.bot { background: rgba(102, 126, 234, 0.3); }
.input-area { display: flex; gap: 1rem; padding: 1rem; border-top: 1px solid rgba(255,255,255,0.2); }
input { flex: 1; padding: 0.75rem; border: none; border-radius: 5px; }
button { padding: 0.75rem 1.5rem; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer; }
button:hover { background: #764ba2; }
</style>
