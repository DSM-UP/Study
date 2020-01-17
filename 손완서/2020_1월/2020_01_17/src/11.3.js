function billPay(amount, payee, account) {
  if (amount > account.balance) throw new Error("insufficient funds");
  account.transfer(payee, amount);
}
