import { Divider, Listbox, ListboxItem, Avatar } from "@nextui-org/react";
import { GoHome, GoHistory } from 'react-icons/go';
import { SiYoutubemusic } from 'react-icons/si';
import { MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineWatchLater } from 'react-icons/md';
import { RiVideoLine } from 'react-icons/ri';
import { BiLike } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import axios from 'axios';
import { useEffect, useState } from "react";


export const LeftNav = (props) => {
    const subsURL = "http://gemsbackend.zetgo.in/api/user/subscriptions"
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
    const [subsData, setSubsData] = useState();

    useEffect(() => {
        const subscriptions = async () => {
            try {
                const response = await axios.get(subsURL, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                const data = await response.data
                setSubsData(data)
            } catch (err) {
                console.log(err)
            }
        }
        subscriptions()
    }, [])

    return (
        <div
            className="bg-[#0f0f0f] h-screen w-0 md:w-[240px] fixed overflow-auto md:pl-2 md:pr-3 px-0"
            style={{
                display: props.isMenuClick ? "none" : "block",
            }}
        >
            <div className="mt-[4.3rem]">
                <div>
                    <Listbox>
                        <ListboxItem key="home" className="bg-[#272727]">
                            <div className="flex-row flex items-center gap-3">
                                <GoHome size={23} />
                                <p className="leading-8">Home</p>
                            </div>
                        </ListboxItem>
                        <ListboxItem key="shorts">
                            <div className="flex-row flex items-center gap-3">
                                <SiYoutubemusic size={23} />
                                <p className="leading-8">Shorts</p>
                            </div>

                        </ListboxItem>
                        <ListboxItem key="edit">
                            <div className="flex-row flex items-center gap-3">
                                <MdOutlineSubscriptions size={23} />
                                <p className="leading-8">Subscriptions</p>
                            </div>

                        </ListboxItem>
                    </Listbox>
                </div>
                <Divider className="my-2" />
                <div>
                    <Listbox>
                        <ListboxItem key="library">
                            <div className="flex-row flex items-center gap-3">
                                <MdOutlineVideoLibrary size={23} />
                                <p className="leading-8">Library</p>
                            </div>

                        </ListboxItem>
                        <ListboxItem key="history">
                            <div className="flex-row flex items-center gap-3">
                                <GoHistory size={23} />
                                <p className="leading-8">History</p>
                            </div>

                        </ListboxItem>
                        <ListboxItem key="yourVideos">
                            <div className="flex-row flex items-center gap-3">
                                <RiVideoLine size={23} />
                                <p className="leading-8">Your videos</p>
                            </div>

                        </ListboxItem>
                        <ListboxItem key="watchLater">
                            <div className="flex-row flex items-center gap-3">
                                <MdOutlineWatchLater size={23} />
                                <p className="leading-8">Watch later</p>
                            </div>

                        </ListboxItem>
                        <ListboxItem key="likedVid">
                            <div className="flex-row flex items-center gap-3">
                                <BiLike size={23} />
                                <p className="leading-8">Liked videos</p>
                            </div>

                        </ListboxItem>
                        <ListboxItem key="showMore">
                            <div className="flex-row flex items-center gap-3">
                                <IoIosArrowDown size={23} />
                                <p className="leading-8">Show more</p>
                            </div>

                        </ListboxItem>
                    </Listbox>
                </div>
                <Divider className="mt-2 mb-4" />
                <div>
                    <h3 className="pl-3 text-[1.05rem] text-white">Subscriptions</h3>
                    <Listbox>
                        {subsData?.map((el, i) => (
                            <ListboxItem key={i}>
                                <div className="flex-row flex items-center gap-3">
                                    <Avatar className="w-6 h-6" src={el.channelProfileIcon} />
                                    <p className="leading-8">{el.channelName}</p>
                                </div>

                            </ListboxItem>
                        ))}
                    </Listbox>
                </div>
                <Divider className="my-4" />
            </div>
        </div>
    )
}