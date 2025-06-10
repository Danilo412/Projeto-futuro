# Projeto CRM

Este projeto é um esqueleto inicial para um aplicativo de Gestão de Relacionamento com o Cliente (CRM). A aplicação segue a especificação abaixo.

## Funcionalidades previstas

- Cadastro de clientes com verificação de duplicidade por CPF/CNPJ ou e-mail.
- Listagem de clientes e histórico de compras por cliente.
- Registro de compras vinculadas ao cliente.
- Classificação de clientes por status (novos, pendentes, em fechamento, inativos).
- Exportação de relatórios em CSV/Excel.

## Tecnologias

- **Backend:** Node.js com Express.
- **Banco de Dados:** a ser configurado (por enquanto, uso de armazenamento em memória para fins de demonstração).
- **Frontend:** Não implementado neste repositório, mas a recomendação é utilizar React, Vue ou Angular.

## Como executar

1. Instale as dependências do servidor:
   ```bash
   cd server
   npm install
   ```
2. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
   O servidor irá executar na porta `3000` por padrão.

Este repositório é apenas um ponto de partida e não contempla todas as regras de negócio descritas no documento de requisitos.
