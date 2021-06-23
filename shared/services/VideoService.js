export default {
    upload: () => {
    },
    retrieve: () => {
        return fetch('/api/videos')
            .then(res => res.json())
            .then(data => data)
    }
}