export default {
    upload: () => {
    },
    retrieve: () => {
        return fetch('/api/files/videos')
            .then(res => res.json())
            .then(data => data)
    }
}