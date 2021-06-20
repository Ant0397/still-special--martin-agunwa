export function titleCase(string) {
    let parts = string.split(' ')
    for (let x = 0; x < parts.length; x++) {
        parts[x] = parts[x].charAt(0).toUpperCase() + parts[x].substring(1)
    }
    return parts.join(' ')
}