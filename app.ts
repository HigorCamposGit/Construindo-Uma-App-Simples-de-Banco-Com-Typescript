import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BonusAccount } from './class/BonusAccount'

console.log('--- TESTANDO PEOPLE ACCOUNT ---')
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Higor', 101)
console.log(`Titular: ${peopleAccount.getName()} | Conta: ${peopleAccount.getAccountNumber()}`)
peopleAccount.deposit(500)
peopleAccount.withdraw(200)
console.log(`Saldo final People: ${peopleAccount.getBalance()}\n`)

console.log('--- TESTANDO COMPANY ACCOUNT ---')
const companyAccount: CompanyAccount = new CompanyAccount('DIO Corp', 202)
console.log(`Titular: ${companyAccount.getName()} | Conta: ${companyAccount.getAccountNumber()}`)
companyAccount.deposit(1000)
companyAccount.getLoan(5000)
console.log(`Saldo final Company: ${companyAccount.getBalance()}\n`)

console.log('--- TESTANDO BONUS ACCOUNT ---')
const bonusAccount: BonusAccount = new BonusAccount('Higor Bonus', 303)
console.log(`Titular: ${bonusAccount.getName()} | Conta: ${bonusAccount.getAccountNumber()}`)
bonusAccount.deposit(100) // Deve somar 100 + 10 = 110 de bônus
console.log(`Saldo final Bonus: ${bonusAccount.getBalance()}`)