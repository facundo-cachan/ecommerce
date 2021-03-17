export default async (arr: Array<any>, key: string) => {
  return await arr.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv
  }, {})
}