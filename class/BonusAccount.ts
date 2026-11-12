import { DioAccount } from "./DioAccount"

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  public deposit = (amount: number): void => {
    if (this.validateStatus() && amount > 0) {
      const bonusAmount: number = amount + 10
      const currentBalance: number = this.getBalance()
      this.setBalance(currentBalance + bonusAmount)
      console.log(`Depósito bônus realizado! Valor: ${amount} (+10 de bônus). Saldo atual: ${this.getBalance()}`)
    } else {
      console.log('Depósito inválido ou conta inativa.')
    }
  }
}