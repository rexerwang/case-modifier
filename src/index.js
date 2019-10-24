/**
 * changeFormatToThis
 *
 * @param {String} str source string
 * @returns {String}
 */
export function camelCase(str) {
  if (!_valid(str)) return str
  return lowerFirst(properCase(str))
}

/**
 * change_format_to_this
 *
 * @param {String} str source string
 * @returns {String}
 */
export function snakeCase(str) {
  if (!_valid(str)) return str
  return _parse(str).join('_')
}

/**
 * change-format-to-this
 *
 * @param {String} str source string
 * @returns {String}
 */
export function kebabCase(str) {
  if (!_valid(str)) return str
  return _parse(str).join('-')
}

/**
 * ChangeFormatToThis
 *
 * @param {String} str source string
 * @returns {String}
 */
export function properCase(str) {
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
export function constantCase(str) {
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
  let blocks = []

  // 1. kebabCase split
  if (/-/.test(str)) {
    blocks = str.split('-')
  }
  // 2. snakeCase | constantCase split
  else if (/_/.test(str)) {
    blocks = str.split('_')
  }
  // 3. Case split
  else {
    blocks = str.split(/(?=[A-Z])/)
  }

  return blocks.map(i => i.toLowerCase())
}

/**
 * Lower first letter
 *
 * @param {String} str source string
 * @returns {String}
 */
export function lowerFirst(str) {
  return str.charAt(0).toLowerCase() + str.substr(1)
}

/**
 * Upper first letter
 *
 * @param {String} str source string
 * @returns {String}
 */
export function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.substr(1)
}

// types
export const CASE_CAMEL = 'camelCase'
export const CASE_SNAKE = 'snakeCase'
export const CASE_KEBAB = 'kebabCase'
export const CASE_DASH = 'kebabCase'
export const CASE_PROPER = 'properCase'
export const CASE_PASCAL = 'properCase'
export const CASE_CONSTANT = 'constantCase'

/**
 * Convert case to target type
 *
 * @param {String} str source string
 * @param {*} caseType case type
 *
 * @returns {String}
 */
export function convert(str, caseType = CASE_CAMEL) {
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
