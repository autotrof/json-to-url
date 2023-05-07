export default obj => {
  const query = [];
  function traverse(obj, prefix = '') {
    for (const [key, value] of Object.entries(obj)) {
      const newPrefix = prefix ? `${prefix}.${key}` : key;

      if (value === null) {
        query.push(`${encodeURIComponent(newPrefix)}=null`);
      } else if (typeof value === 'object') {
        traverse(value, newPrefix);
      } else if (Array.isArray(value)) {
        query.push(...value.map(val => `${encodeURIComponent(newPrefix)}[]=${encodeURIComponent(val)}`));
      } else {
        query.push(`${encodeURIComponent(newPrefix)}=${encodeURIComponent(value)}`);
      }
    }
  }
  traverse(obj);
  return query.join('&');
}