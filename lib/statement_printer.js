const Account = require('./account.js')
const Transaction = require('./transaction.js')

const moment = require('moment');

class StatementPrinter {
  constructor(account) {
    this.account = account
  }
  
  print_statement() {
    let balance = 0
    let transList = []
    this.account.transactions.forEach(trans => {
      balance += trans.amount
      if (trans.amount > 0) {
        transList.push(`${trans.date} || ${trans.amount.toFixed(2)} || || ${balance.toFixed(2)}`)
      } else {
        transList.push(`${trans.date} || || ${String(trans.amount.toFixed(2)).slice(1)} || ${balance.toFixed(2)}`)
      }
    });
    let finalList = []
    finalList.push("date || credit || debit || balance")
    transList.reverse().forEach(line => {
      finalList.push(line)
    })
    return finalList.join('\n')
  }
}

module.exports = StatementPrinter