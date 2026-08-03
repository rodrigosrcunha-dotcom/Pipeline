# Pipeline Frontend

Projeto front-end criado com Vite + React e configurado com pipeline CI/CD.

## 🚀 O que está implementado

- Validação de código com ESLint
- Testes com Vitest
- Build da aplicação com Vite
- Deploy automático para GitHub Pages a cada push na branch `main`

## 📁 Estrutura de scripts

- `npm ci` - instalar dependências usando lockfile
- `npm run lint` - rodar ESLint
- `npm run test` - executar testes unitários
- `npm run build` - gerar build de produção

## 🚀 Pipeline de CI/CD

Você pode acompanhar as execuções de Integração e Entrega Contínua na aba [Actions](../../actions).

### Como verificar o status dos Jobs:
1. Acesse a aba **Actions** no topo do repositório.
2. Clique no workflow da commit mais recente.
3. **Validar & Compilar (CI):** Verifica se o código passa na verificação do linter, se todos os testes unitários foram executados com sucesso e se o build de produção foi gerado sem erros.
4. **Deploy (CD):** Executado automaticamente após a aprovação do job de CI, publicando a versão atualizada no GitHub Pages.

## 🌐 URL de publicação

O site será publicado em GitHub Pages após o deploy aparecer no branch `gh-pages`.

> https://github.com/rodrigosrcunha-dotcom/Pipeline.git
