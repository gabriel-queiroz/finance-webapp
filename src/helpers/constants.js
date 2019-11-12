export const transactionTypes = {
  RECIPE: 'RECIPE',
  EXPENSE: 'EXPENSE',
};

export const transactionTypesPTBR = {
  RECIPE: 'RECEITA',
  EXPENSE: 'DESPESA',
};

export const translateTransactionType = transactionType =>
  transactionType === transactionTypes.EXPENSE
    ? transactionTypesPTBR.EXPENSE
    : transactionTypesPTBR.RECIPE;
