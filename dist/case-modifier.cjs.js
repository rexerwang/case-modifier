'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * changeFormatToThis
 *
 * @param {String} str source string
 * @returns {String}
 */
function camelCase(str) {
  if (!_valid(str)) return str
  return lowerFirst(properCase(str))
}

/**
 * change_format_to_this
 *
 * @param {String} str source string
 * @returns {String}
 */
function snakeCase(str) {
  if (!_valid(str)) return str
  return _parse(str).join('_')
}

/**
 * change-format-to-this
 *
 * @param {String} str source string
 * @returns {String}
 */
function kebabCase(str) {
  if (!_valid(str)) return str
  return _parse(str).join('-')
}

/**
 * ChangeFormatToThis
 *
 * @param {String} str source string
 * @returns {String}
 */
function properCase(str) {
  if (!_valid(str)) return str
  return _parse(str)
    .map(i => upperFirst(i))
    .join('')
}

/**
 * CHANGE_FORMAT_TO_THIS
 *
 * @param {String} str source string
 * @returns {String}
 */
function constantCase(str) {
  if (!_valid(str)) return str
  return snakeCase(str).toUpperCase()
}

/**
 * Validate source string
 *
 * @param {String} str source string
 * @returns {Boolean}
 */
function _valid(str) {
  return str && (/^[A-Za-z0-9_]+$/.test(str) || /^[A-Za-z0-9\-]+$/.test(str))
}

/**
 * Parse and Spit string to Array by caseType
 *
 * @param {String} str source string
 * @returns {Array}
 */
function _parse(str) {
  let blocks = [];

  // 1. kebabCase split
  if (/-/.test(str)) {
    blocks = str.split('-');
  }
  // 2. snakeCase | constantCase split
  else if (/_/.test(str)) {
    blocks = str.split('_');
  }
  // 3. Case split
  else {
    blocks = str.split(/(?=[A-Z])/);
  }

  return blocks.map(i => i.toLowerCase())
}

/**
 * Lower first letter
 *
 * @param {String} str source string
 * @returns {String}
 */
function lowerFirst(str) {
  return str.charAt(0).toLowerCase() + str.substr(1)
}

/**
 * Upper first letter
 *
 * @param {String} str source string
 * @returns {String}
 */
function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.substr(1)
}

// types
const CASE_CAMEL = 'camelCase';
const CASE_SNAKE = 'snakeCase';
const CASE_KEBAB = 'kebabCase';
const CASE_DASH = 'kebabCase';
const CASE_PROPER = 'properCase';
const CASE_PASCAL = 'properCase';
const CASE_CONSTANT = 'constantCase';

/**
 * Convert case to target type
 *
 * @param {String} str source string
 * @param {*} caseType case type
 *
 * @returns {String}
 */
function convert(str, caseType = CASE_CAMEL) {
  switch (caseType) {
    case CASE_CAMEL:
      return camelCase(str)
    case CASE_SNAKE:
      return snakeCase(str)
    case CASE_KEBAB:
    case CASE_DASH:
      return kebabCase(str)
    case CASE_PROPER:
    case CASE_PASCAL:
      return properCase(str)
    case CASE_CONSTANT:
      return constantCase(str)
    default:
      return str
  }
}

exports.CASE_CAMEL = CASE_CAMEL;
exports.CASE_CONSTANT = CASE_CONSTANT;
exports.CASE_DASH = CASE_DASH;
exports.CASE_KEBAB = CASE_KEBAB;
exports.CASE_PASCAL = CASE_PASCAL;
exports.CASE_PROPER = CASE_PROPER;
exports.CASE_SNAKE = CASE_SNAKE;
exports.camelCase = camelCase;
exports.constantCase = constantCase;
exports.convert = convert;
exports.kebabCase = kebabCase;
exports.lowerFirst = lowerFirst;
exports.properCase = properCase;
exports.snakeCase = snakeCase;
exports.upperFirst = upperFirst;
