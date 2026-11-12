# 🏦 DIO - Projeto de POO Avançado em TypeScript
# Construindo Uma App Simples de Banco Com Typescript.

---

Repositório contendo o desafio prático da **Digital Innovation One (DIO)** na trilha de TypeScript para **Formação TypeScript Fullstack Developer**
O objetivo do projeto foi refatorar e estruturar uma aplicação bancária aplicando estritamente os pilares da **Orientação a Objetos (POO)**, encapsulamento, tipagem forte e regras de negócio escaláveis.

---

## 🛠️ Tecnologias e Ferramentas
* **TypeScript** (Versão 4.9+)
* **Node.js**
* **ts-node-dev** (Ambiente de execução e compilação em tempo real)

---

## 📂 Arquitetura e Estrutura do Projeto

O projeto foi organizado de forma modular, separando a lógica das contas e a camada de execução:

```text
├── class/
│   ├── DioAccount.ts        # Classe base abstrata contendo o núcleo da conta bancária
│   ├── CompanyAccount.ts    # Conta jurídica (com lógica de empréstimo)
│   ├── PeopleAccount.ts     # Conta física (com registro de identificador documental)
│   └── BonusAccount.ts      # Conta bônus (com acréscimo de +10 por depósito)
├── app.ts                   # Arquivo principal de integração e testes das instâncias
├── package.json
└── tsconfig.json
