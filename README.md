<!-- README:BEGIN -->
# 🧱 Create GBL Project

> Um CLI interativo para iniciar projetos frontend ou backend com padrões da GBL Studio.

---

## 🚀 Comece seu projeto com um único comando

```bash
pnpm create @gbl-studio/project
```

> Também funciona com `npx`:
>
> ```bash
> npx @gbl-studio/create-project
> ```

---

## 🧠 O que você pode criar?

### ✅ Frontend
- Next.js (App Router)
- TailwindCSS
- ESLint + Prettier
- Turbopack
- ShadCN UI

### ✅ Backend
- Node.js + Express
- TypeScript
- Estrutura modular (rotas, controllers, middlewares)
- Dotenv e logger prontos
- Pronto para escalar com JWT, Prisma, etc.

---

## 📦 Estrutura do projeto

```bash
create-gbl-project/
├── src/                 # CLI principal (index.ts)
├── template/
│   ├── frontend/        # Template completo Next.js + Tailwind + ShadCN
│   └── backend/         # Template completo Express + TS
├── package.json
└── tsconfig.json
```

---

## 📄 Scripts úteis (dev do CLI)

```bash
pnpm dev       # Roda o CLI local com tsx
pnpm build     # Compila com tsup
pnpm publish   # Publica no NPM (como público)
```

---

## ✅ Como funciona?

O CLI pergunta:

1. Qual tipo de projeto? (frontend/backend)
2. Qual o nome do projeto?

Se for backend e não terminar com `api`, ele adiciona `-api` automaticamente ao nome. Depois, ele copia o template correspondente e roda `pnpm install`.

---

## 💡 Exemplo de uso

```bash
pnpm create @gbl-studio/project

✔ Qual tipo de projeto você quer criar? › Backend
✔ Qual será o nome do projeto? … minha-plataforma

📁 => Cria pasta `minha-plataforma-api`
📦 => Instala dependências com pnpm
✅ => Projeto pronto para rodar com `pnpm dev`
```

---

## 🧬 Filosofia GBL

Esse CLI segue a filosofia da GBL Studio:

- Código simples, limpo e padronizado
- Ferramentas modernas, com DX em primeiro lugar
- Pronto para escalar do MVP ao produto final

---

## 🛠️ Requisitos

- Node.js 18+
- pnpm instalado globalmente

---

## 🧊 Licença

MIT © [GBL Studio](https://github.com/gbl-studio)
<!-- README:END -->

