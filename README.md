# Bank tech test J Pillay Implementation

Implementation of the Bank tech test for Makers Bootcamp

Have 100% test coverage with all tests passing

## Design Philosophy

To keep things clean, all data will be extrapolated from the transactions list in the Account model. There can be deposits and also withdrawals - these should be the only records that are kept and which determines the balance. I feel this is the cleanest way of doing this and allows for flexibility adding extra features. An interest function can be added, with reasonable ease.
I am slightly questioning the decision to stringify the DateTime for transaction when the instance is initialised, although this does make printing easier, it strips the DateTime Obj of it's characteristics and removes the ability for comparison and so forth - the program does meet the spec as is taking the other path would have added unneeded complexity to the printer class and testing - the DateTime functionality could be added back in if needed.

Please see excalidraw document in the base directory for more background (PillayJ_Bank_Test.png)

## To Run

Install the NPM package from inside the main directory

```
npm install
```

To run tests

```
npm run test
```

## Makers' Instructions Below

# Bank tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time.  This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```
