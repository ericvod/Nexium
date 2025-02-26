# Nexium

Nexium é uma aplicação web inspirada no Discord, construída com Next.js e diversas tecnologias modernas. O projeto utiliza componentes de UI do [shadcn/ui](https://ui.shadcn.com/) para oferecer uma interface sofisticada e interativa, além de recursos de comunicação em tempo real, autenticação robusta e upload de arquivos.

## Índice

- [Recursos](#recursos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Configuração](#instalação-e-configuração)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Referências](#referências)
- [Licença](#licença)

## Recursos

- **Interface Inspirada no Discord**: UI moderna e interativa utilizando componentes do shadcn/ui.
- **Autenticação**: Implementada com [Clerk](https://clerk.dev/), garantindo login e cadastro seguros.
- **Comunicação em Tempo Real**: Utiliza [Socket.io](https://socket.io/) para troca de mensagens e atualizações instantâneas.
- **Media e Streaming**: Integração com [LiveKit](https://livekit.io/) para funcionalidades de áudio/vídeo e conferências em tempo real.
- **Upload de Arquivos**: Gerenciado por [Uploadthing](https://uploadthing.com/), facilitando o envio de arquivos.
- **Formulários Reativos**: Criação e validação de formulários com [react-hook-form](https://react-hook-form.com/) e [Zod](https://github.com/colinhacks/zod).
- **Gerenciamento de Estado**: Utilização de [Zustand](https://github.com/pmndrs/zustand) para um estado global leve e escalável.
- **Estilização Moderna**: Interface estilizada com [Tailwind CSS](https://tailwindcss.com/), complementada por [tailwind-merge](https://github.com/joe-bell/tailwind-merge) e [tailwindcss-animate](https://github.com/benface/tailwindcss-animate).
- **Outras Utilidades**: Inclui Axios para requisições HTTP, date-fns para manipulação de datas, emoji-mart para seleção de emojis e diversas bibliotecas auxiliares (clsx, lucide-react, cmdk, etc.).

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no servidor, roteamento e otimização de desempenho.
- **React**: Biblioteca para construção de interfaces de usuário.
- **Clerk**: Solução de autenticação que integra com Next.js.
- **Prisma**: ORM para interagir com o banco de dados de forma tipada e segura.
- **Tailwind CSS**: Framework utilitário para criação de designs responsivos e modernos.
- **shadcn/ui**: Conjunto de componentes reutilizáveis baseados em Radix UI e estilizados com Tailwind CSS.
- **LiveKit**: Plataforma para streaming e comunicação em tempo real.
- **Socket.io**: Biblioteca para comunicação via WebSockets e atualizações em tempo real.
- **react-hook-form** e **Zod**: Para criação, gerenciamento e validação de formulários.
- **Zustand**: Gerenciamento de estado global.
- **Axios**: Cliente HTTP para facilitar chamadas à API.
- **Date-fns**: Biblioteca para manipulação e formatação de datas.
- **Emoji-mart**: Solução para seleção de emojis.
- **Uploadthing**: Gerenciamento de uploads de arquivos.
- **Utilitários Diversos**: Inclui bibliotecas como @tanstack/react-query, clsx, class-variance-authority, uuid e outras para funcionalidades complementares.

## Estrutura do Projeto

```
Nexium/
├── app/                   # Diretório principal da aplicação Next.js
├── components/            # Componentes reutilizáveis da interface (UI)
├── hooks/                 # Hooks customizados para lógica e estado
├── lib/                   # Funções utilitárias e bibliotecas internas
├── pages/
│   ├── api/socket/        # Endpoints da API para comunicação via Socket.io
│   └── ...                # Outras rotas da aplicação
├── prisma/                # Arquivos do Prisma (schema, migrações, etc.)
├── .env.example           # Exemplo de configuração das variáveis de ambiente
├── package.json           # Dependências e scripts do projeto
├── tailwind.config.ts     # Configuração do Tailwind CSS
└── tsconfig.json          # Configuração do TypeScript
```

## Instalação e Configuração

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/ericvod/Nexium.git
   cd Nexium
   ```

2. **Instale as Dependências**:
   Utilize npm, yarn ou pnpm:
   ```bash
   npm install
   # ou
   yarn
   # ou
   pnpm install
   ```

3. **Configuração das Variáveis de Ambiente**:
   Crie um arquivo `.env` na raiz do projeto baseado no arquivo `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Preencha as seguintes variáveis com as chaves e URLs apropriadas:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
   - `NEXT_PUBLIC_CLERK_SIGN_UP_URL`
   - `UPLOADTHING_TOKEN`
   - `DATABASE_URL`
   - `LIVEKIT_API_KEY`
   - `LIVEKIT_API_SECRET`
   - `NEXT_PUBLIC_LIVEKIT_URL`
   - `NEXT_PUBLIC_SITE_URL`

4. **Rodar o Projeto**:
   Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

## Variáveis de Ambiente

As variáveis de ambiente presentes no arquivo `.env.example` são essenciais para a correta integração dos serviços utilizados:

- **Clerk (Autenticação)**:
  - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
  - `CLERK_SECRET_KEY`
  - `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
  - `NEXT_PUBLIC_CLERK_SIGN_UP_URL`

- **Uploadthing (Uploads de Arquivos)**:
  - `UPLOADTHING_TOKEN`

- **Banco de Dados**:
  - `DATABASE_URL`

- **LiveKit (Streaming/Comunicação em Tempo Real)**:
  - `LIVEKIT_API_KEY`
  - `LIVEKIT_API_SECRET`
  - `NEXT_PUBLIC_LIVEKIT_URL`

- **Configuração Geral**:
  - `NEXT_PUBLIC_SITE_URL`

## Referências

- **Componentes de UI**: [shadcn/ui](https://ui.shadcn.com/)
- **Tutorial/Inspirado por**: [Fullstack Discord Clone: Next.js 13, React, Socket.io, Prisma, Tailwind, MySQL | Full Course 2023](https://www.youtube.com/watch?v=ZbX4Ok9YX94)
- **Next.js**: [Documentação do Next.js](https://nextjs.org/docs)
- **Clerk**: [Clerk.dev](https://clerk.dev/)
- **LiveKit**: [LiveKit.io](https://livekit.io/)
- **Prisma**: [Prisma.io](https://www.prisma.io/)

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

*Nexium é um projeto de código aberto. Contribuições, sugestões e feedback são muito bem-vindos!*

---
