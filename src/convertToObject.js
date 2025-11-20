'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map((decl) => decl.trim())
    .filter((decl) => decl.length > 0)
    .forEach((decl) => {
      const [key, ...valueParts] = decl.split(':');

      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim();

        result[key.trim()] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
