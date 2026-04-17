# desafio_frontend

# 🎬 DCmovies - Cinema na Palma da Mão

Olá! Seja bem-vindo ao **DCmovies**. Este projeto nasceu de um desafio técnico para criar uma interface conectada ao mundo real do cinema, utilizando a API do The Movie Database (TMDB).

A ideia aqui não era apenas listar filmes, mas criar uma experiência onde você possa ver o que está em alta, dar sua opinião e gerenciar suas próprias avaliações.

---

## 🚀 A Solução

Para este desafio, decidi seguir pelo caminho da **simplicidade robusta**. Em vez de usar frameworks pesados, utilizei o trio fundamental da web: **HTML5, CSS3 e JavaScript Moderno (ES6+)**.

### 🧠 Como o projeto funciona?

1.  **Sessão de Visitante (Guest Session):** Para facilitar a vida de quem testa, o app cria automaticamente uma "Sessão de Visitante" assim que abre. Isso significa que você não precisa criar conta nem fazer login para começar a avaliar os filmes. Tudo acontece de forma fluida.

2.  **Filmes em Cartaz (Now Playing):** O app busca os filmes que estão nos cinemas agora. Para garantir que o usuário veja logo o que é bom, apliquei um algoritmo de **ordenação decrescente**. Ou seja: os filmes com as melhores notas da crítica aparecem primeiro.

3.  **Localização (Português):** Toda a comunicação com a API foi configurada para o idioma `pt-BR`. Assim, títulos e sinopses aparecem como nós conhecemos aqui no Brasil.

4.  **Interatividade (CRUD de Avaliações):** Você pode dar uma nota de 0.5 a 10 para qualquer filme. O app se encarrega de:
    - Enviar sua nota para o servidor.
    - Listar seus filmes avaliados em uma seção separada.
    - Permitir que você remova uma avaliação se mudar de ideia, atualizando a tela instantaneamente (sem recarregar a página!).

---

## 🎨 Design & Experiência (UI/UX)

O visual foi inspirado nas grandes plataformas de streaming (Dark Mode). Algumas escolhas foram estratégicas:

- **Efeito Hover:** Ao passar o mouse nos pôsteres, eles ganham destaque e brilho, convidando ao clique.
- **Barra de Busca Inteligente:** Na sua lista de avaliados, você pode filtrar filmes pelo nome em tempo real. Ideal para quando sua lista começar a crescer!
- **Feedback Visual:** Usei transições suaves e badges (etiquetas) coloridas para as notas, facilitando a leitura rápida.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica.
- **CSS3:** Estilização moderna com Grid e Flexbox.
- **JavaScript (Vanilla):** Consumo de API via `fetch`, manipulação dinâmica do DOM e funções assíncronas (`async/await`).
- **TMDB API:** A fonte de dados oficial.

---

## ⚙️ Como rodar o projeto

1.  Clone este repositório.
2.  Abra o arquivo `script.js` e insira sua `API_KEY` do TMDB na primeira linha.
3.  Abra o `index.html` no seu navegador (recomendo usar a extensão _Live Server_ do VS Code).
4.  Divirta-se avaliando seus filmes favoritos!

---

### ✍️ Considerações Finais

Este projeto foi uma excelente oportunidade para praticar como lidar com estados de uma aplicação (como uma sessão ativa) e como manter a interface do usuário sincronizada com dados que vêm de um servidor externo. Espero que goste do resultado! 🍿
