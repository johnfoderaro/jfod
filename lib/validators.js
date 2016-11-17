'use strict';

const validators = {
  customValidators: {
    honeyPot(value) {
      if (value.length > 0) {
        return false;
      } else {
        return true;
      }
    },
    hasContent(value) {
      if (value.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};

module.exports = validators;
