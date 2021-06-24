export default {
    upload: () => {
    },
    retrieve: () => {
        return fetch('/api/articles')
            .then(res => res.json())
            .then(data => data)
    }
}