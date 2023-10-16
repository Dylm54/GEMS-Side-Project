import { Avatar } from "@nextui-org/react"
import moment from 'moment'

export const VideoCard = (props) => {

    function formatViews(number) {
        if (number >= 1000000) {
            return (number / 1000000).toFixed(1) + "M";
        }
        else if (number >= 1000) {
            return (number / 1000).toFixed() + "K";
        }
        else {
            return number.toString();
        }
    }

    function formatDate(date) {
        if (moment(date).fromNow() === "a month ago") {
            return "1 month ago"
        } else {
            return moment(date).fromNow()
        }
    }

    return (
        <div key={props.key} className="w-full md:w-[calc(100%/2-8px)] lg:w-[calc(100%/3-16px)] 2xl:w-[calc(100%/4-16px)]  h-80 flex flex-col gap-y-2 cursor-pointer">
            <div className="w-full h-52 sm:h-80 md:h-44 lg:h-[12.5rem] 2xl:h-44">
                <img className="object-fill h-full w-full rounded-xl" src={props.thumbnail} alt="thumbnail" />
            </div>
            <div className="flex flex-row gap-x-2">
                <div>
                    <Avatar src={props.channelProfileIcon} size="sm" style={{ position: "unset" }} />
                </div>
                <div className="flex flex-col">
                    <p className="font-medium text-[#F1F1F1]">{props.title}</p>
                    <p className="text-[#AAAAAA] text-sm">{props.channelName}</p>
                    <p className="text-[#AAAAAA] text-sm tracking-tight">{formatViews(props.views)} views ⋅ {formatDate(props.uploadedAt)}</p>
                </div>
            </div>
        </div>
    )
}