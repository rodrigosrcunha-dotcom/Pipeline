# ⚡ Otimização e Auditoria de Performance Frontend (CI/CD)

Aplicação Web desenvolvida em React, testada com Vitest/JSDOM e implantada de forma automatizada via pipeline de CI/CD utilizando **GitHub Actions** e **GitHub Pages**.

---

## 🧪 Testes Automatizados e Compatibilidade

* **Node.js**: Compatibilidade ajustada para **Node 20 / 22**.
* **JSDOM**: Atualizado para a versão `^24.0.0` para evitar inconsistências de execução do runner durante a execução de `npm test`.

---

## 🛠️ Técnica de Otimização Aplicada

Para gerar uma melhoria mensurável de carregamento e redução do payload inicial transmitido na rede, foram aplicadas as seguintes técnicas no código:

1. **Divisão de Código (Code Splitting / Lazy Loading):** Utilização de `React.lazy()` e `<Suspense>` para postergar o carregamento de componentes secundários (`ComponenteLento.jsx`), reduzindo o tamanho do *bundle* inicial do JavaScript.
2. **Otimização e Carregamento Preguiçoso de Imagens:** Utilização do atributo `loading="lazy"` e formato otimizado `.webp` com dimensões explícitas para evitar o *Cumulative Layout Shift* (CLS).
3. **Acessibilidade e SEO Semântico:** Adição da tag semântica `<main>`, inclusão da `<meta name="description">` e atributo `lang="pt-BR"` no documento HTML.

---

## 📊 Comparativo de Métricas (Antes vs. Depois)

### 📈 Desempenho e Recursos Transferidos

| Métrica / Recurso | Antes da Otimização | Depois da Otimização | Melhoria / Impacto |
| :--- | :---: | :---: | :---: |
| **Pontuação Performance** | 100 | **100** | Mantido no topo |
| **Pontuação Acessibilidade** | 94 | **100** | 📈 +6 pontos |
| **Pontuação SEO** | 90 | **100** | 📈 +10 pontos |
| **JavaScript Não Utilizado** | ~22.0 KiB | **< 2.0 KiB** | 🚀 Redução de ~90% |
| **Tamanho do Bundle Principal** | Único arquivo carregado | Divisão em *chunks* dinâmicos | ⚡ Carregamento sob demanda |
| **First Contentful Paint (FCP)** | 0.5s | **0.4s** | ⚡ Otimizado |

---

## 📁 Evidências da Auditoria

* 📄 [Relatório Inicial do Lighthouse (Antes)](./docs/lighthouse-antes.pdf)
* 📄 [Relatório Otimizado do Lighthouse (Depois)](./docs/lighthouse-depois.pdf)