const moment = require('moment');

class Transaction {
  constructor(amount, date=moment(new Date()).format("DD/MM/YYYY")) {
    this.amount = amount
    this.date = date
  }
}

module.exports = Transaction