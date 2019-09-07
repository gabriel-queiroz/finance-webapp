export const formatCurrencyBRL = (value) => {
  if (value) {
    return `R$ ${value
      .toFixed(2)
      .toString()
      .replace('.', ',')}`;
  }
  return '';
};

export const BRLtoFloat = (currency) => {
  const value = currency.replace(',', '.').replace('R$', '');

  return parseFloat(value);
};

const getDigits = string => `${string}`.replace(/\D/g, '');

const padLeft = (n, width = 2, z = '0') => {
  const number = `${n}`;
  const diff = width - number.length;
  const pad = diff > 0 ? z.repeat(diff) : '';
  return `${pad}${number}`;
};

export const maskMoney = (money) => {
  const regex = /(?<millions>\d{0,3})(?<thousands>\d{0,3})(?<hundreds>\d{0,3})(?<cents>\d{0,2})/;

  const inputDigits = getDigits(money);
  const fullDigits = padLeft(inputDigits, 11);
  const matches = fullDigits.match(regex);

  let {
    millions, thousands, hundreds, cents,
  } = matches.groups;

  millions = millions.replace(/^[0]*(?=[1-9])?/, '');

  if (millions <= 0) thousands = thousands.replace(/^[0]*(?=[1-9])?/, '');
  if (millions <= 0 && thousands <= 0) {
    hundreds = hundreds.replace(/^[0]*(?=[1-9])?/, '');
  }

  millions = millions.length > 0 ? `${millions}.` : '';
  thousands = thousands.length > 0 ? `${thousands}.` : '';
  hundreds = hundreds.length > 0 ? `${hundreds},` : '0,';
  cents = padLeft(cents);

  const currency = 'R$';
  return `${currency} ${millions}${thousands}${hundreds}${cents}`;
};
