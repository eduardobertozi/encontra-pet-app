# Encontra Pet 🐾

**Plataforma de Adoção Animal para ONGs**

Conectando corações, salvando vidas através da adoção responsável.

## 🎯 Sobre o Projeto

Encontra Pet é uma aplicação web completa que facilita o processo de adoção de animais, conectando ONGs que cuidam de animais com pessoas interessadas em adotar. A plataforma possui duas áreas principais:

1. **Landing Page Pública** - Para visitantes conhecerem a plataforma e visualizarem animais disponíveis
2. **Dashboard Administrativo** - Para ONGs gerenciarem animais, solicitações de adoção, voluntários e eventos

## 🚀 Tecnologias Utilizadas

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** (Ícones)
- **Recharts** (Gráficos)
- **shadcn/ui** (Componentes base)

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos para Executar

1. **Clone ou extraia o projeto**

\`\`\`bash
cd encontra-pet
\`\`\`

2. **Instale as dependências**

\`\`\`bash
npm install
\`\`\`

3. **Execute o projeto em modo de desenvolvimento**

\`\`\`bash
npm run dev
\`\`\`

4. **Acesse no navegador**

\`\`\`
http://localhost:3000
\`\`\`

## 🎨 Paleta de Cores

- **Primária (Azul)**: `#2A6EBB`
- **Secundária (Laranja)**: `#FF9A3D`
- **Neutros**: Brancos, cinzas e pretos

## 📱 Funcionalidades

### Landing Page
- Hero section com CTAs principais
- Seção "Como Funciona" com 4 etapas visuais
- Galeria de animais em destaque
- Seção de benefícios para ONGs
- Footer completo

### Dashboard Administrativo
- **Overview**: Métricas gerais (animais em cuidado, adoções do mês, etc.)
- **Gerenciamento de Animais**:
  - Listagem com busca e filtros
  - Adicionar/editar animais
  - Visualização detalhada
  - Status (Disponível, Adotado, Cuidado Médico)
- **Solicitações de Adoção**:
  - Lista de pedidos pendentes
  - Aprovar/rejeitar solicitações
  - Informações dos candidatos
- Sidebar com navegação completa
- Design responsivo

## 🔐 Autenticação (Simulada)

A autenticação está simulada para fins de demonstração. O dashboard pode ser acessado diretamente através da rota `/dashboard`.

Em um ambiente de produção, seria necessário implementar:
- Sistema de login real
- Gerenciamento de sessões
- Controle de acesso por roles
- Integração com backend

## 📊 Dados Mocados

O projeto utiliza dados simulados localmente para demonstração, incluindo:
- 8+ animais com informações completas
- 2 ONGs cadastradas
- 5 solicitações de adoção
- Métricas e estatísticas do dashboard

## 🎯 Próximos Passos

Para transformar este protótipo em produção:

1. Implementar backend (Node.js, Python, etc.)
2. Adicionar banco de dados (PostgreSQL, MongoDB, etc.)
3. Sistema de autenticação real (NextAuth, Auth0, etc.)
4. Upload real de imagens (Cloudinary, S3, etc.)
5. Sistema de notificações
6. Integração com e-mail
7. Testes automatizados
8. Deploy em produção

## 📄 Licença

Projeto desenvolvido para fins educacionais e demonstração.

## 👥 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato através dos canais da plataforma.

---

**Encontra Pet** - Transformando vidas, uma adoção por vez 💙🧡
