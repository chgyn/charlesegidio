# Landing Page & Portfólio Profissional — Charles Egidio

> **Senior Software Engineer · Tech Lead · Full Stack Architect**  
> Especialista em Sistemas Distribuídos, Core Bancário, Fintechs, Microsserviços em Go/PHP/Python, Cloud AWS e Inteligência Artificial.

---

## 🚀 Tecnologias Utilizadas

- **Core & Estrutura:** HTML5 Semântico, Vanilla JavaScript (ES Modules), SVG Icons & Mockups
- **Estilização & Design System:** Vanilla CSS3 moderno (Dark Tech & Fintech Theme, Glassmorphism, CSS Grid, Flexbox, Animações aceleradas por GPU)
- **Tipografia:** Google Fonts (*Plus Jakarta Sans*, *Inter*, *JetBrains Mono*)
- **Build & Bundling:** [Vite](https://vitejs.dev/) (configurado com caminhos relativos `./` para compatibilidade total com o **GitHub Pages**)
- **Deploy Automatizado:** GitHub Actions Workflow (`.github/workflows/deploy.yml`)

---

## 📂 Estrutura do Projeto

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml            # Pipeline CI/CD para deploy no GitHub Pages
├── public/
│   ├── curriculo-charles-egidio.md  # Currículo completo em Markdown
│   └── favicon.svg               # Favicon moderno em SVG
├── src/
│   ├── style.css                 # Design System, layout, responsividade e temas
│   └── main.js                   # Lógica interativa (filtros, modais, arquitetura, cópia)
├── index.html                    # Estrutura semântica e metadados SEO/OpenGraph
├── package.json                  # Dependências e scripts
├── vite.config.js                # Configuração do Vite com base relativa
└── README.md                     # Documentação do projeto
```

---

## 🛠️ Como Executar Localmente

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento (com Hot Reload):**
   ```bash
   npm run dev
   ```
   Acesse: `http://localhost:3000`

3. **Gerar build de produção estático (para GitHub Pages):**
   ```bash
   npm run build
   ```
   Os arquivos finais estáticos serão gerados na pasta `dist/`.

4. **Visualizar a build de produção localmente:**
   ```bash
   npm run preview
   ```

---

## 🌐 Como Publicar no GitHub Pages

O projeto já inclui um workflow pronto do GitHub Actions em `.github/workflows/deploy.yml`.

### Opção 1: Deploy Automático via GitHub Actions (Recomendado)
1. Crie o repositório no seu GitHub (ex: `https://github.com/chgyn/charlesegidio`).
2. No GitHub, vá em **Settings** > **Pages** do repositório.
3. Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
4. Faça o commit e push dos arquivos:
   ```bash
   git add .
   git commit -m "feat: landing page profissional Charles Egidio"
   git branch -M main
   git remote add origin https://github.com/chgyn/charlesegidio.git
   git push -u origin main
   ```
5. O GitHub Actions irá compilar e publicar o site automaticamente em:  
   `https://chgyn.github.io/charlesegidio/`

---

## 👨‍💻 Autor

- **Charles da Silva Egidio**
- **WhatsApp:** [(62) 9 8463-5397](https://wa.me/5562984635397)
- **E-mail:** charlesegidio@gmail.com
- **LinkedIn:** [linkedin.com/in/charlesegidio](https://www.linkedin.com/in/charlesegidio/)
- **GitHub:** [github.com/chgyn](https://github.com/chgyn)
