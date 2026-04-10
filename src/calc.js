/**
 * 基本的な計算ライブラリ
 */

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  // BUG: ゼロ除算のチェックがない
  return a / b;
}
