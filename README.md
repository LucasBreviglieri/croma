# 🎨 Croma Comunicação — Landing Page

> **"Estratégia para marcas em movimento."**
> 
> A Croma conecta estratégia e criatividade para construir uma comunicação alinhada ao momento da sua empresa e aonde ela quer chegar.

Este repositório contém o código-fonte da landing page oficial da **Croma Comunicação**. O projeto foi desenvolvido com foco em performance, acessibilidade e design responsivo, entregando uma experiência fluida através de tecnologias nativas da web, sem a necessidade de ferramentas de build complexas.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando a trindade nativa da web (Vanilla):
*   **HTML5:** Estrutura semântica e acessível.
*   **CSS3:** Estilização avançada com CSS Variables (`:root`), Flexbox, CSS Grid, Media Queries para responsividade mobile-first/desktop-first e animações fluidas (`@keyframes`).
*   **JavaScript (ES6+):** Scripts leves e sem dependências de terceiros (sem jQuery, React, etc.). Utilizado para navegação móvel, controle de animações (IntersectionObserver) e gestão de scroll.

## ✨ Funcionalidades e Destaques

*   **Zero Dependências:** Não é necessário NodeJS, NPM ou empacotadores (Webpack/Vite). É só baixar e usar.
*   **Alta Performance:** Arquivos leves com ícones SVG inline (`<symbol>`) para evitar múltiplas requisições HTTP e imagens otimizadas em formato WebP/Base64.
*   **Animações Progressivas (Progressive Enhancement):** Animações de entrada utilizando `IntersectionObserver`. 
*   **Acessibilidade (a11y):** 
    *   Respeito à preferência do sistema operacional para redução de movimento (`prefers-reduced-motion`).
    *   Botão nativo no rodapé para pausar animações manualmente.
    *   Suporte completo à navegação por teclado (foco visível e atalhos como `Esc` para fechar menus).
    *   Link de "Pular para o conteúdo" (Skip link) para leitores de tela.
*   **Design Responsivo:** Layout adaptável para telas grandes, notebooks, tablets e smartphones.

## 🛠️ Como Executar o Projeto

Como o projeto não utiliza ferramentas de build, rodar o site localmente é extremamente simples:

1. Faça o clone ou baixe este repositório.
2. Dê um duplo clique no arquivo `index.html` (ou o nome que deu ao arquivo) para abri-lo diretamente no seu navegador padrão.
3. *(Opcional)* Para uma melhor experiência de desenvolvimento, utilize a extensão **Live Server** no VS Code para auto-reload.

## ⚠️ Nota Importante sobre Tipografia (Fonte Azedo)

Conforme as instruções de design e comentários no código:
* O projeto utiliza a fonte **Montserrat** (via Google Fonts) para os textos base.
* Os títulos principais (`h1`, `h2`) utilizam a fonte **Azedo**.
* **Atenção:** O arquivo da fonte *Azedo* não é distribuído neste repositório. O CSS tentará carregá-la localmente (`local('Azedo Bold')`). Antes de publicar o site em um ambiente de produção, é necessário **adquirir a licença web da fonte Azedo**, gerar os arquivos de fonte (como `.woff2`) e incluí-los via `@font-face` no CSS.

## 🗂️ Estrutura da Página

A Landing Page está dividida nas seguintes seções de navegação:
1. **Início (`#inicio`):** Hero section com a proposta de valor da agência.
2. **Sobre (`#sobre`):** Apresentação da Croma e seus pilares (Adaptabilidade, Versatilidade, Inovação).
3. **Serviços (`#servicos`):** 
   * Produção de Conteúdo
   * Audiovisual
   * Tráfego Pago
   * Desenvolvimento Digital
4. **Clientes (`#clientes`):** Grid com logotipos de marcas parceiras (Panobianco, Clube 04, CIOP, Bridge, Lu Castro, Dental, Innovate, Nexus, Spaço).
5. **Contato (`#contato`):** Chamada para ação (CTA) final e links diretos para o WhatsApp.

## 📞 Contato da Agência

*   **WhatsApp:** [(19) 99130-4333](https://wa.me/5519991304333)
*   **Email:** ag.cromacomunicacao@gmail.com
*   **Instagram:** [@croma.comunicacao](https://www.instagram.com/croma.comunicacao/)

---
*© 2026 Croma Comunicação. Todos os direitos reservados.*