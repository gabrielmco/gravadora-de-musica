# Truus — Agência Criativa 🚀

Este é o website institucional da **Truus**, uma agência criativa especializada em estratégia de marca, redes sociais, produção de vídeo e ativações. O projeto foi construído com tecnologias web modernas para proporcionar uma experiência visual premium, interativa e de altíssimo desempenho.

---

## 🛠️ Tecnologias Utilizadas

O projeto utiliza o que há de mais moderno no ecossistema do React e Next.js, com foco em animações fluidas e performance:

*   **[Next.js 15](https://nextjs.org/)** (App Router) — Framework React de nível de produção.
*   **[React 19](https://react.dev/)** — Biblioteca para construção de interfaces.
*   **[GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)** — Engine de animação de alta performance para efeitos dinâmicos de scroll e micro-interações.
*   **[Lenis](https://lenis.darkroom.engineering/)** — Biblioteca para scroll suave e de alto desempenho.
*   **CSS Customizado (Vanilla CSS)** — Para máximo controle sobre o layout, design system e responsividade.

---

## ✨ Funcionalidades e Efeitos Premium

*   **Smooth Scroll (Scroll Suave):** Implementação robusta do Lenis para uma rolagem suave em todos os navegadores.
*   **Animações Avançadas:** Efeitos de revelação de elementos, transições e cartões dinâmicos usando GSAP.
*   **Cursor Customizado (Cursor Bubble):** Interação dinâmica do cursor do mouse acompanhando o movimento do usuário.
*   **Vídeo Hero (Vimeo):** Background imersivo e de carregamento otimizado na seção principal do site.
*   **Double Marquee:** Efeito de texto infinito correndo em direções opostas de maneira fluida.
*   **Layout Responsivo:** Totalmente adaptado para dispositivos móveis, tablets e desktops.

---

## 🚀 Como Executar o Projeto Localmente

Siga as instruções abaixo para configurar e rodar o projeto na sua máquina:

### 1. Pré-requisitos
Certifique-se de ter instalado em sua máquina:
*   [Node.js](https://nodejs.org/) (versão v18.x ou superior recomendada)
*   Gerenciador de pacotes `npm` (vem junto com o Node) ou `yarn`.

### 2. Instalação de Dependências
Clone o repositório ou navegue até a pasta do projeto e execute:
```bash
npm install
```

### 3. Rodando em Ambiente de Desenvolvimento
Para iniciar o servidor local de desenvolvimento, execute:
```bash
npm run dev
```
O projeto estará disponível por padrão no endereço: `http://localhost:3000`.

### 4. Build de Produção
Para criar a versão otimizada para produção:
```bash
npm run build
```
Para testar a versão de produção localmente após o build:
```bash
npm run start
```

---

## 📁 Estrutura de Pastas Principal

```text
├── app/                  # Rotas do Next.js (App Router), estilos globais e layouts
│   ├── globals.css       # Estilização global
│   ├── layout.jsx        # Estrutura base da aplicação e metadados SEO
│   └── page.jsx          # Página inicial do site
├── components/           # Componentes modulares reutilizáveis (Navbar, Hero, Footer, etc)
├── lib/                  # Bibliotecas ou utilitários auxiliares
├── public/               # Ativos estáticos (imagens, ícones, vídeos)
├── package.json          # Dependências do projeto e scripts de execução
└── jsconfig.json         # Configuração de alias e caminhos no Javascript
```
