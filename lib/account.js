class Account {
  constructor() {
    this.transactions = []
  }

  add_transaction(transaction) {
    this.transactions.push(transaction)
  }

  get_balance() {
    let result = 0.00
    this.transactions.forEach(trans => result += trans.amount)
    return result
  }
}

module.exports = Account