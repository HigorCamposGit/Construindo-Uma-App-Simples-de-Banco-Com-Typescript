# 🏦 DIO - Projeto de POO Avançado em TypeScript
# Construindo Uma App Simples de Banco Com Typescript.

---

Repositório contendo o desafio prático da **Digital Innovation One (DIO)** na trilha de TypeScript para **Formação TypeScript Fullstack Developer**
O objetivo do projeto foi refatorar e estruturar uma aplicação bancária aplicando estritamente os pilares da **Orientação a Objetos (POO)**, encapsulamento, tipagem forte e regras de negócio escaláveis.

---

## 🙏 Créditos e Agradecimentos

Agradecimentos especiais à expert **Nathally Souza** pela didática, orientação e estruturação deste desafio na plataforma da **Digital Innovation One (DIO)**:

* **Instrutora:** [Nathally Souza (@nathsouzadev)](https://github.com/nathsouzadev)
* **Repositório Base do Desafio:** [digitalinnovationone/desafio01-ts](https://github.com/digitalinnovationone/desafio01-ts)

---

## 🛠️ Tecnologias e Ferramentas
* **TypeScript**.
* **Node.js**.
* **ts-node-dev** Ambiente de execução e compilação em tempo real.
* **VS Code** Configurado e estruturado para edição.
* **Git & GitHub** Controle de versão e hospedagem de código.

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
```

---

