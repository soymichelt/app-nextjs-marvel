const storage = process.browser ? window.localStorage : null

export const save = (data) => {
    if(storage) {
        try {
            const favsCollection = get()
            favsCollection.push(data)
            const dataInString = JSON.stringify(favsCollection)
            storage.setItem('favs', dataInString)
            return true
        }
        catch(e) {
            console.log('Error: ', e)
            return false
        }
    }
    else {
        return false
    }
}

export const get = () => {
    if(storage) {
        try {
            const favsItem = storage.getItem('favs')
            let favsCollection = []
            if(favsItem) favsCollection = JSON.parse(favsItem)

            return favsCollection
        }
        catch(e) {
            console.log('Error: ', e)
            return []
        }
    }
    else {
        return []
    }
}

export const select = (id) => {
    if(storage) {
        const data = get()
        const element = data?.find(item => item.data.id == id)
        return element
    }
    else {
        null
    }
}

export const remove = (id) => {
    if(storage) {
        try {
            const data = get()
            const newData = data.filter(item => item.data.id != id)
            const dataInString = JSON.stringify(newData)
            storage.setItem('favs', dataInString)
            return true
        }
        catch(e) {
            console.log('Error: ', e)
            return false
        }
    }
    else {
        return false
    }
}