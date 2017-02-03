import Ember from 'ember';

export function priceFormatter(params/*, hash*/) {
  let cents = params[0];
  return `${cents},00 PLN`;
}

export default Ember.Helper.helper(priceFormatter);
