export default {
    upload: () => {
    },
    retrieve: () => {
        return fetch('/api/content')
            .then(res => res.json())
            .then(data => data)
    },
    updateAnalytic: (name, analytic, value) => {
        return fetch('/api/content/analytic', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/Json',
                'Accept': 'Application/Json'
            },
            body: JSON.stringify({
                name,
                analytic,
                value
            })
        }).then(res => res.status != 204 ? res.json() : null)
    }
}