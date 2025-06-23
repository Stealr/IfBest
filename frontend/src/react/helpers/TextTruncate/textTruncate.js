function truncateText(text, maxLength) {
  // Проверка на ошибки в исходных данных
  if (typeof text !== 'string' || typeof maxLength !== 'number' || maxLength <= 0) {
    return text;
  }

  if (text.length <= maxLength) {
    return text;
  }
  
  const actualLength = Math.max(1, maxLength - 3);
  return text.substring(0, actualLength) + '...';
}
