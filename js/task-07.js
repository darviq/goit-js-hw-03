"use trict";

// Типов транзацкий всего два.
// Можно положить либо снять деньги со счета.
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
  id: 0,
};
// Каждая транзакция это объект со свойствами: id, type и amount

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    // Метод принимает сумму и тип транзакции
    // создает и возвращает объект транзакции

    Transaction.id += 1;
    return {
      amount: amount,
      type: type,
      id: Transaction.id,
    };
  },

  deposit(amount) {
    // Метод отвечающий за добавление суммы к балансу.
    // Принимает сумму танзакции.
    // Вызывает createTransaction для создания объекта транзакции
    // после чего добавляет его в историю транзакций

    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    this.balance += amount;
  },

  withdraw(amount) {
    // Метод отвечающий за снятие суммы с баланса.
    // Принимает сумму танзакции.
    // Вызывает createTransaction для создания объекта транзакции
    // после чего добавляет его в историю транзакций.
    // Если amount больше чем текущий баланс, выводи сообщение
    // о том, что снятие такой суммы не возможно, недостаточно средств.

    if (amount > this.balance) {
      console.log("Cнятие суммы не возможно, недостаточно средств")
    } else {
      this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
      this.balance -= amount;
    }
  },

  getBalance() {
    // Метод возвращает текущий баланс

    return this.balance;
  },

  getTransactionDetails(id) {
    // Метод ищет и возвращает объект транзации по id

    for (const obj of this.transactions) {
      if (obj.id === id) return obj;
    }
  },

  getTransactionTotal(type) {
    // Метод возвращает количество средств
    // определенного типа транзакции из всей истории транзакций

    let totalSum = 0;
    for (const obj of this.transactions) {
      if (obj.type === type) totalSum += obj.amount;
    }
    return totalSum;
  },
};

// account.deposit(250);
// account.deposit(300);
// account.withdraw(100);
// account.withdraw(50);
// account.deposit(200);
// console.log(account.getBalance());
// console.log(account.transactions);
// console.log(account.getTransactionDetails(4));
// console.log(account.getTransactionTotal('deposit'));
// console.log(account.getTransactionTotal('withdraw'));