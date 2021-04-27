class BankAccount {
  // holder : 계좌주인, balance : 저금
  constructor(name, money) {
    this.holder = name;
    this.balance = money;
  }

  // 계좌 입금
  deposit(money) {
    this.balance += money;
  }

  // 계좌 인출
  withdraw(money) {
    if (this.balance - money < 0) {
      // 마이너스 통장일 경우.
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
    }
  }

  // 계좌이체
  transfer(money, anotherAccount) {
    const account = anotherAccount;
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      // 지금 통장에서 인출
      this.balance -= money;
      // 타 계좌에 입금
      account.balance += money;
    }
  }
}