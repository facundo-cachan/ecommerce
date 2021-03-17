export default {
  Booleans: a => Object.keys(a).map(b => `${b} = ${typeof a[b] === 'boolean' ? a[b] ? 1 : 0 : a[b]}`),
  ArrayToString: a => a.map(b => {
    switch (typeof b) {
      case 'boolean':
        return b ? 1 : 0;
      default:
        let c = Number.parseInt(b);
        return isNaN(c) ? `"${b}"` : c
    }
  }),
  ForUpdates: a => Object.keys(a).map(b => {
    let c = Number.parseInt(a[b]);
    return `${b}=${typeof a[b] === 'boolean' ? a[b] ? 1 : 0 : isNaN(c) ? `'${a[b]}'` : c}`
  }).toString()
}