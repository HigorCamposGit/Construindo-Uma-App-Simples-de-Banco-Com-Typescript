export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  public getName = (): string => {
    return this.name
  }

  public getAccountNumber = (): number => {
    return this.accountNumber
  }

  public getBalance = (): number => {
    return this.balance
  }

  public deposit = (amount: number): void => {
    if (this.validateStatus() && amount > 0) {
      this.balance += amount
      console.log(`Você depositou ${amount}. Novo saldo: ${this.balance}`)
    } else {
      console.log('Depósito inválido ou conta inativa.')
    }
  }

  public withdraw = (amount: number): void => {
    if (this.validateStatus() && this.balance >= amount && amount > 0) {
      this.balance -= amount
      console.log(`Você sacou ${amount}. Saldo atual: ${this.balance}`)
    } else {
      console.log('Saque não autorizado. Verifique o saldo ou o status da conta.')
    }
  }

  public setBalance = (amount: number): void => {
    this.balance = amount
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}