import { createSelector } from 'reselect';

export const sumRecipes = createSelector(
  state => state.transactionsReducer.data,
  items => items.reduce((amount, item) => {
    if (item.category.type === 'RECIPE') {
      return amount + Math.abs(item.value);
    }
    return amount;
  }, 0),
);

export const sumExpenses = createSelector(
  state => state.transactionsReducer.data,
  items => items.reduce((amount, item) => {
    if (item.category.type === 'EXPENSE') {
      return amount + Math.abs(item.value);
    }
    return amount;
  }, 0),
);
