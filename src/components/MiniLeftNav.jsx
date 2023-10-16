import { Listbox, ListboxItem } from "@nextui-org/react";
import { GoHome } from 'react-icons/go';
import { SiYoutubemusic } from 'react-icons/si';
import { MdOutlineSubscriptions, MdOutlineVideoLibrary} from 'react-icons/md';


export const MiniLeftNav = (props) => {
    return (
        <div 
            className="bg-[#0f0f0f] h-screen w-0 md:w-24 fixed overflow-auto"
            style={{
                display: props.isMenuClick? "block" : "none", 
            }}
        >
                <div className="mt-[4.3rem]">
                    <div>
                        <Listbox>
                            <ListboxItem key="home">
                                <div className="flex-col flex items-center">
                                    <GoHome size={23} />
                                    <p className="leading-8 text-[0.6rem]">Home</p>
                                </div>
                            </ListboxItem>
                            <ListboxItem key="shorts">
                                <div className="flex-col flex items-center">
                                    <SiYoutubemusic size={23} />
                                    <p className="leading-8 text-[0.6rem]">Shorts</p>
                                </div>

                            </ListboxItem>
                            <ListboxItem key="edit">
                                <div className="flex-col flex items-center">
                                    <MdOutlineSubscriptions size={23} />
                                    <p className="leading-8 text-[0.6rem]">Subscriptions</p>
                                </div>

                            </ListboxItem>
                            <ListboxItem key="library">
                                <div className="flex-col flex items-center">
                                    <MdOutlineVideoLibrary size={23} />
                                    <p className="leading-8 text-[0.6rem]">Library</p>
                                </div>

                            </ListboxItem>
                        </Listbox>
                    </div>
                </div>
            </div>
    )
}