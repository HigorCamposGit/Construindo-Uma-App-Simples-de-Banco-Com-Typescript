import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  public getLoan = (amount: number): void => {
    if (this.validateStatus() && amount > 0) {
      const currentBalance = this.getBalance()
      this.setBalance(currentBalance + amount)
      console.log(`Você pegou um empréstimo de ${amount}. Novo saldo: ${this.getBalance()}`)
    } else {
      console.log('Empréstimo não autorizado.')
    }
  }
}