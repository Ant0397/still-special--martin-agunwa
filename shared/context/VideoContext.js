import React, { createContext, useState } from 'react'

export const VideoContext = createContext()

export function VideoProvider({ children }) {
    const [videos, setVideos] = useState(null)

    return (
        <VideoContext.Provider value={[videos, setVideos]}>
            { children }
        </VideoContext.Provider>
    )
}