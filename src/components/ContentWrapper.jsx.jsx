import { ScrollCategory } from "./ScrollCategory"
import { useEffect, useState } from "react"
import axios from "axios"
import { VideoCard } from "./VideoCard"

export const ContentWrapper = (props) => {
    const subsURL = "http://gemsbackend.zetgo.in/api/user/recommendations"
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
    const [recVids, setRecVids] = useState()

    useEffect(() => {
        const recommendations = async () => {
            try {
                const response = await axios.get(subsURL, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                const data = await response.data
                setRecVids(data)
            } catch (err) {
                console.log(err)
            }
        }
        recommendations()
    }, [])

    console.log(recVids)

    return (
        <div>
            <div className="flex flex-col w-full">
                <div className="bg-[#0f0f0f] flex w-full h-[64px]">
                </div>
                <div className="flex flex-row bg-[#0f0f0f]">
                    <div
                        className="bg-[#0f0f0f] md:flex w-[100px] h-screen hidden"
                        style={{
                            width: props.isMenuClick ? "6rem" : "340px"
                        }}
                    >
                    </div>
                    <div className="text-white flex flex-col px-4 sm:px-8 md:px-4 w-full">
                        <ScrollCategory />
                        <div className="w-full bg-[#0f0f0f] h-auto mt-4 md:mt-20">
                            <div className="flex flex-wrap flex-row gap-3 sm:gap-24 md:gap-4">
                                {recVids?.map((el, i) => (
                                    <VideoCard 
                                        key={i} 
                                        thumbnail={el.thumbnail} 
                                        channelProfileIcon={el.channelProfileIcon}
                                        title={el.title}
                                        channelName={el.channelName}
                                        views={parseInt(el.views)}
                                        uploadedAt={el.uploadedAt}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}