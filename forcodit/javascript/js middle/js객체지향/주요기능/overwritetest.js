class BankAccount {
  constructor(name, money) {
    this.holder = name;
    this.balance = money;
  }

  get balance() {
    return this._balance;
  }

  set balance(money) {
    if (money >= 0) {
      this._balance = money;
    } else {
      console.log('Not valid');
    }
  }

  deposit(money) {
    this.balance += money;
  }

  withdraw(money) {
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
    }
  }

  transfer(money, anotherAccount) {
    const account = anotherAccount;
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
      account.balance += money;
    }
  }
}

class SavingsAccount extends BankAccount {
  constructor(name, money) {
    super(name, money);
    this.years = 0;
  }

  addInterest(rate) {
    this.balance *= (1 + (rate * this.years));
  }
  
  transfer(money, anotherAccount) {
    super.transfer(money, anotherAccount);
    this.balance -= money * 0.005;
  }
}

class DonationAccount extends BankAccount {
  constructor(name, money, rate) {
    super(name, money);
    this.rate = rate;
  }

  donate(rate) {
    this.balance *= (1 - this.rate);
  }

  transfer(money, anotherAccount) {
    super.transfer(money, anotherAccount);
    this.balance -= money * 0.002;
  }
}

const ba1 = new BankAccount('Tom', 20000000);
const sa1 = new SavingsAccount('Jerry', 10000000);
const da1 = new DonationAccount('Kate', 30000000);
const sa2 = new SavingsAccount('Alice', 9000000);

const accountForVacation = new BankAccount('Vacation', 0);

const accounts = [ba1, sa1, da1, sa2];

for(account of accounts) {
  account.transfer(800000, accountForVacation);
}

console.log(ba1.balance);
console.log(sa1.balance);
console.log(da1.balance);
console.log(sa2.balance);
console.log(accountForVacation.balance);
