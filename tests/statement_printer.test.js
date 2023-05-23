const Account = require('../lib/account.js')
const Transaction = require('../lib/transaction.js')
const StatementPrinter = require('../lib/statement_printer.js')

describe('StatementPrinter', () => {
  describe('Initialises and prints account details', () => {
    it('prints account details', () => {
      const mockTrans = new Transaction(1000, '10/01/2023')
      const mockTrans2 = new Transaction(2000, '13/01/2023')
      const mockTrans3 = new Transaction(-500, '14/01/2023')

      const account = new Account()
      account.add_transaction(mockTrans)
      account.add_transaction(mockTrans2)
      account.add_transaction(mockTrans3)
      printer = new StatementPrinter(account)
      const expectedOutput = 
      `date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00`
      result = printer.print_statement()
      expect(result).toBe(expectedOutput)
    });
  });
});