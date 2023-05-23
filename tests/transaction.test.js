const Transaction = require('../lib/transaction.js')

const moment = require('moment');

const now_date = moment(new Date()).format("DD/MM/YYYY")

describe('Transaction', () => {
  describe('Initialises an Transaction instance and automaitcally assigns date in the right format', () => {
    it('returns date in correct format', () => {
      const transaction = new Transaction()
      expect(transaction.date).toEqual(now_date)
    });
  });
});