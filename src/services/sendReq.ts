export const Send = (payload) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(payload.name)
        }, 1000)
    })
}