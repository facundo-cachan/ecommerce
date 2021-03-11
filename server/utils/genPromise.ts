export default (value: string | number, text: string) =>
    new Promise(resolve => {
        setTimeout(() => {
            console.log(text)
            return resolve(value)
        }, 100)
    })