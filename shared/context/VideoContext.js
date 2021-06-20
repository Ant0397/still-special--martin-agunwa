import React, { createContext, useEffect, useState } from 'react'
import VideoService from '../services/VideoService'

export const VideoContext = createContext()

export function VideoProvider({ children }) {
    let [videos, setVideos] = useState(null)

    useEffect(() => {
        VideoService.retrieve()
            .then(data => setVideos(data))
    }, [])

    return (
        <VideoContext.Provider value={videos}>
            { children }
        </VideoContext.Provider>
    )
}