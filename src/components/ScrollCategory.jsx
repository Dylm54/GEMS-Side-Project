import { ScrollShadow, Button } from "@nextui-org/react";

export const ScrollCategory = () => {
    return (
        <div className="fixed">
            <ScrollShadow size={100} orientation="horizontal" className="max-w-0 md:max-w-[45%] lg:max-w-[60%] xl:max-w-[90%] max-h-[300px] bg-[#0f0f0f] pt-4">
                <div className="flex flex-row gap-3 h-12">
                    <Button className="w-auto min-w-max h-8 text-black bg-white" radius="sm">
                        All
                    </Button>
                    <Button radius="sm" className="bg-[#272727] w-auto min-w-max h-8">
                        News
                    </Button>
                    <Button radius="sm" className="bg-[#272727] w-auto min-w-max h-8">
                        Music
                    </Button>
                    <Button radius="sm" className="bg-[#272727] w-auto min-w-max h-8">
                        Jazz
                    </Button>
                    <Button radius="sm" className="bg-[#272727] w-auto min-w-max h-8">
                        Gaming
                    </Button>
                    <Button radius="sm" className="bg-[#272727] w-auto min-w-max h-8">
                        Podcasts
                    </Button>
                    <Button radius="sm" className="bg-[#272727] w-auto min-w-max h-8">
                        Live
                    </Button>
                    <Button radius="sm" className="bg-[#272727] w-auto min-w-max h-8">
                        Cooking shows
                    </Button>
                    <Button radius="sm" className="bg-[#272727] w-auto min-w-max h-8">
                        Playlists
                    </Button>
                    <Button radius="sm" className="bg-[#272727] w-auto min-w-max h-8">
                        Sports
                    </Button>
                    <Button radius="sm" className="bg-[#272727] w-auto min-w-max h-8">
                        Albums
                    </Button>
                    <Button radius="sm" className="bg-[#272727] w-auto min-w-max h-8">
                        Recently uploaded
                    </Button>
                    <Button radius="sm" className="bg-[#272727] w-auto min-w-max h-8">
                        Watched
                    </Button>
                </div>
            </ScrollShadow>
        </div>
    )
} 