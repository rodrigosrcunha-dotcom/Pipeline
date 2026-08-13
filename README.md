# ⚡ Otimização e Auditoria de Performance Frontend (CI/CD)

Aplicação Web simples desenvolvida em React e implantada de forma automatizada via pipeline de CI/CD utilizando **GitHub Actions** e **GitHub Pages**.

---

## 📊 Relatório de Auditoria Lighthouse

Para garantir a qualidade, acessibilidade e SEO da aplicação, foi realizada uma análise de auditoria utilizando a ferramenta **Google Lighthouse**.

### 🔄 Comparativo Geral (Antes vs. Depois)

| Categoria | Antes | Depois | Status |
| :--- | :---: | :---: | :---: |
| **Performance** | **100** | **100** | 🟢 Mantido |
| **Acessibilidade** | **94** | **100** | 🚀 Melhorado |
| **Boas Práticas (Best Practices)** | **77** | **100** | 🚀 Melhorado |
| **SEO** | **90** | **100** | 🚀 Melhorado |

---

## 🔍 Gargalos e Oportunidades Identificados (Diagnóstico "Antes")

1. **Acessibilidade (Nota: 94):** 
   * Faltava a estrutura semântica principal `<main>` (`Document does not have a main landmark`), o que prejudicava a navegação por leitores de tela.
2. **SEO (Nota: 90):** 
   * A aplicação não continha a meta tag `<meta name="description">` no `<head>`, afetando a indexação e prévia nos mecanismos de busca.
3. **Boas Práticas (Nota: 77 em ambiente padrão):** 
   * Scripts e extensões injetados no navegador (ex: Google Translate) geravam *cookies* de terceiros sem a devida configuração.
4. **Performance (Oportunidade de Otimização):**
   * Identificado cerca de ~22 KiB de JavaScript não utilizado no pacote inicial do build.

---

## 🛠️ Melhorias Aplicadas (Diagnóstico "Depois")

1. **Inclusão de Tag Semântica:** 
   * O componente principal (`App.jsx`) foi envolvido pela tag `<main>`, resolvendo a falha de estrutura e elevando a **Acessibilidade para 100**.
2. **Adição de Meta Description & Ajuste de Idioma:** 
   * Adicionada a tag `<meta name="description" content="Aplicação Web para o pipeline de CI/CD.">` e ajustado o atributo `lang="pt-BR"` no `index.html`, elevando o **SEO para 100**.
3. **Auditoria em Ambiente Isolado (Aba Anônima):** 
   * Teste realizado sem a interferência de extensões de terceiros, confirmando a pontuação de **100 em Boas Práticas**.

---

## 📁 Evidências de Validação

Os relatórios detalhados da auditoria e as capturas de tela foram armazenados na pasta `./docs`:

* 📄 [Relatório Inicial (Antes)](./docs/lighthouse-antes.pdf)
* 📸 [Prints de Validação e Notas Finais (100%)](./docs/)