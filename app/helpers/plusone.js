import { helper } from '@ember/component/helper';

export function plusone(params) {
  return params[0] + 1
};

export default helper(plusone);