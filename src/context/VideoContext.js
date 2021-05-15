import React, { createContext } from 'react'
import visualisedAudio from '../../assets/Still Special Campaign (Visualised audio) - Advocacy to raise awarenes about the plight of children with disabilities in rural parts of Nigeria  (Made by Headliner).mp4'
import humanInterest from '../../assets/Untitled Project (Made by Headliner).mp4'

export const VideoContext = createContext()

export function VideoProvider({ children }) {
    const videos = [
        {
            title: 'Still Special - Visualised Audio',
            video: visualisedAudio
        },
        {
            title: 'Still Special - Human Interest Story',
            video: humanInterest
        },
        {
            title: 'Still Special - Instagram Story',
            video: 'https://youtu.be/6LjNQRADMpk'
        }
    ]
    
    return (
        <VideoContext videos={videos}>
            { children }
        </VideoContext>
    )
}