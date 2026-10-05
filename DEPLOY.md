# 🚀 Guia de Deploy - ContreFinanças v2

## Passos para Deploy

### 1️⃣ **GitHub**
```bash
git remote add origin https://github.com/SEU-USER/ContreFinancas-v2.git
git branch -M main
git push -u origin main
```

### 2️⃣ **Vercel (Frontend)**
1. Acesse: https://vercel.com
2. Clique "Add New Project"
3. Selecione o repositório `ContreFinancas-v2`
4. Build Command: `cd frontend && npm install && npm run build`
5. Output Directory: `frontend/dist`
6. Variáveis de Ambiente:
   - `VITE_API_URL`: URL do backend (ex: https://seu-backend.railway.app)
7. Deploy!

### 3️⃣ **Railway (Backend)**
1. Acesse: https://railway.app
2. Clique "New Project" → "Deploy from GitHub"
3. Selecione o repositório
4. Variáveis de Ambiente:
   - `SUPABASE_URL`: sua URL Supabase
   - `SUPABASE_KEY`: sua chave Supabase
   - `GROQ_API_KEY`: sua chave Groq
   - `JWT_SECRET_KEY`: chave secreta JWT
5. Deploy!

## 📱 URLs de Produção
- **Frontend**: https://seu-projeto.vercel.app
- **Backend**: https://seu-projeto.railway.app
- **API**: https://seu-projeto.railway.app/docs

---

**Status**: ✅ Pronto para deploy
**Data**: 5 de outubro de 2026
