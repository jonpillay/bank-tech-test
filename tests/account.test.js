const Account = require('../lib/account.js')
const Transaction = require('../lib/transaction.js')

describe('Account', () => {
  describe('Initialises an Account instance', () => {
    it('returns a balance of 0', () => {
      const account = new Account()
      const balance = account.get_balance()
      expect(balance).toBe(0)
    });
  });
  describe('initilises account and transaction, adds trans and returns proper balance', () => {
    it('returns a balance of 20', () => {
      const account = new Account()
      const balance = account.get_balance()
      expect(balance).toBe(0)
      const transaction = new Transaction(20)
      account.add_transaction(transaction)
      const balance2 = account.get_balance()
      expect(balance2).toBe(20)
    })
  })
  describe('initilises account and transaction, adds trans and returns proper balance', () => {
    it('returns a balance of 20', () => {
      const account = new Account()
      const balance = account.get_balance()
      expect(balance).toBe(0)
      const transaction = new Transaction(20)
      account.add_transaction(transaction)
      const balance2 = account.get_balance()
      expect(balance2).toBe(20)
      const transaction2 = new Transaction(-10)
      account.add_transaction(transaction2)
      balance3 = account.get_balance()
      expect(balance3).toBe(10)
    })
  })
});