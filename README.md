# Portfólio — Bruno Hiago Xavier

Portfólio profissional de um desenvolvedor Full Stack & Mobile, com foco em Kotlin, NestJS, React/Next.js, fintech e agritech.

## Tecnologias

- Next.js, React, TypeScript e Tailwind CSS
- Framer Motion para animações
- MinIO para disponibilização temporária do certificado público

## Desenvolvimento

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Abra `http://localhost:3000`. Para validar antes do deploy:

```bash
pnpm lint
pnpm build
```

## Variáveis de ambiente

Configure `NEXT_PUBLIC_SITE_URL` com o domínio de produção e as variáveis `MINIO_*` somente se desejar servir o certificado pelo storage. A rota aceita apenas o certificado cadastrado no código e produz URLs temporárias de cinco minutos.

## Publicação

URL de produção: [brunoxavier.dev.br](https://brunoxavier.dev.br).
