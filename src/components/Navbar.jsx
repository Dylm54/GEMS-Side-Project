import { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, Input, DropdownItem, DropdownTrigger, DropdownSection, Dropdown, DropdownMenu, Avatar, User } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon.jsx";
import ytLogo from "../assets/yt-logo.png";
import { Button } from "@nextui-org/react";
import { CustomBadge } from "./customBadge.jsx";
import { RiVideoAddLine } from 'react-icons/ri';
import { IoNotificationsOutline } from 'react-icons/io5';
import { MenuClickContext } from "../context";
import jwtDecode from 'jwt-decode'

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [MenuClickState, handleStateChange] = MenuClickContext();
    const [username, setUsername] = useState('')
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

    useEffect(() => {
        const name = () => {
            if (token) {
                const decode = jwtDecode(token)
                setUsername(decode.username)
            }
        }
        name();
    }, [])

    const handleSignout= () => {
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC`
        window.location.href = '/login'
      }

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="full"
            className="bg-[#0f0f0f] fixed"
        >
            <NavbarContent justify="start" className="gap-3 !basis-auto !grow-0">
                <Button
                    className="hidden md:flex"
                    radius="full"
                    isIconOnly
                    variant="light"
                    onClick={() => handleStateChange(!MenuClickState)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 448 512" fill='white'><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                </Button>
                <NavbarBrand className="mr-4">
                    <img
                        src={ytLogo}
                        alt="Youtube Logo"
                        className="h-5 w-13"
                    />
                </NavbarBrand>

            </NavbarContent>
            <NavbarContent className="!grow-1 !basis-auto !justify-center hidden md:inline-flex">
                <Input
                    classNames={{
                        base: "w-auto min-w-[50%]  h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    radius="full"
                    placeholder="Search"
                    size="sm"
                    startContent={<SearchIcon size={18} />}
                    type="search"
                />

                <Button
                    className="hidden md:flex bg-[#2C2C2E]"
                    radius="full"
                    isIconOnly
                    variant="light"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 384 512" fill="white"><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" /></svg>
                </Button>

            </NavbarContent>
            <NavbarContent as="div" className="items-center !grow-0 !basis-auto gap-3.5" justify="end">

                <Button
                    className="hidden md:flex"
                    radius="full"
                    isIconOnly
                    variant="light"
                >
                    <RiVideoAddLine size={22} />
                </Button>

                <CustomBadge content="9+" shape="circle" color="ytRed" className="hidden md:inline-block">
                    <Button
                        className="hidden md:flex"
                        radius="full"
                        isIconOnly
                        aria-label="more than 99 notifications"
                        variant="light"
                    >
                        <IoNotificationsOutline size={24} />
                    </Button>
                </CustomBadge>
                <NavbarContent style={{ display: isSearchOpen ? "flex" : "none" }} className="md:!hidden">
                    <Input
                        classNames={{
                            base: "max-w-[8rem] h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }}
                        radius="full"
                        placeholder="Search"
                        size="sm"
                        startContent={<SearchIcon size={18} />}
                        type="search"
                    />
                </NavbarContent>
                <Button
                    className="flex md:!hidden"
                    style={{ display: isSearchOpen ? "none" : "flex" }}
                    radius="full"
                    isIconOnly
                    variant="light"
                    onClick={() => setSearchOpen(!isSearchOpen)}
                >
                    <SearchIcon size={18} />
                </Button>
                <Dropdown
                    radius="sm"
                    classNames={{
                        base: "p-0 border-small border-divider bg-background",
                        arrow: "bg-default-200",
                    }}
                    className="!bg-[#282828]"
                >
                    <DropdownTrigger >
                        <Avatar
                            as="button"
                            name={username}
                            size="sm"
                        />
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Custom item styles"
                        disabledKeys={["profile"]}
                        className="p-3"
                        itemClasses={{
                            base: [
                                "rounded-md",
                                "text-[#F1F1F1]",
                                "transition-opacity",
                                "data-[hover=true]:text-[#F1F1F1]",
                                "data-[hover=true]:bg-[#3E3E3E]",
                                "dark:data-[hover=true]:bg-default-50",
                                "data-[selectable=true]:focus:bg-default-50",
                                "data-[pressed=true]:opacity-70",
                                "data-[focus-visible=true]:ring-default-500",
                            ],
                        }}
                    >
                        <DropdownSection aria-label="Profile & Actions" showDivider>
                            <DropdownItem
                                isReadOnly
                                key="profile"
                                className="h-14 gap-2 opacity-100"
                            >
                                <User
                                    name={username}
                                    classNames={{
                                        name: "text-white",
                                        description: "text-white",
                                    }}
                                    avatarProps={{
                                        size: "sm",
                                        
                                    }}
                                />

                            </DropdownItem>
                            <DropdownItem key="google">
                                <a href="" className="text-[#3FA6FF]">Manage your Google Account</a>
                            </DropdownItem>
                        </DropdownSection>
                        <DropdownSection aria-label="Profile & Actions" showDivider>
                            <DropdownItem key="yourChannel">
                                <div className="flex-row flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="white"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
                                    <p>Your channel</p>
                                </div>
                            </DropdownItem>
                            <DropdownItem key="youtubeStudio">
                                <div className="flex-row flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="white"><path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z" /></svg>
                                    <p>Youtube studio</p>
                                </div>
                            </DropdownItem>
                            <DropdownItem key="switchAccount">
                                <div className="flex-row flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 640 512" fill="white"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" /></svg>
                                    <p>Switch account</p>
                                </div>
                            </DropdownItem>
                            <DropdownItem key="logout" color="danger">
                                <div onClick={handleSignout} className="flex-row flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="white"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" /></svg>
                                    <p>Sign out</p>
                                </div>
                            </DropdownItem>
                        </DropdownSection>

                        <DropdownSection aria-label="DataInfo" showDivider>
                            <DropdownItem key="purchasesAndMemberships">
                                <div className="flex-row flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 384 512" fill="white"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 80c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm128 72c8.8 0 16 7.2 16 16v17.3c8.5 1.2 16.7 3.1 24.1 5.1c8.5 2.3 13.6 11 11.3 19.6s-11 13.6-19.6 11.3c-11.1-3-22-5.2-32.1-5.3c-8.4-.1-17.4 1.8-23.6 5.5c-5.7 3.4-8.1 7.3-8.1 12.8c0 3.7 1.3 6.5 7.3 10.1c6.9 4.1 16.6 7.1 29.2 10.9l.5 .1 0 0 0 0c11.3 3.4 25.3 7.6 36.3 14.6c12.1 7.6 22.4 19.7 22.7 38.2c.3 19.3-9.6 33.3-22.9 41.6c-7.7 4.8-16.4 7.6-25.1 9.1V440c0 8.8-7.2 16-16 16s-16-7.2-16-16V422.2c-11.2-2.1-21.7-5.7-30.9-8.9l0 0c-2.1-.7-4.2-1.4-6.2-2.1c-8.4-2.8-12.9-11.9-10.1-20.2s11.9-12.9 20.2-10.1c2.5 .8 4.8 1.6 7.1 2.4l0 0 0 0 0 0c13.6 4.6 24.6 8.4 36.3 8.7c9.1 .3 17.9-1.7 23.7-5.3c5.1-3.2 7.9-7.3 7.8-14c-.1-4.6-1.8-7.8-7.7-11.6c-6.8-4.3-16.5-7.4-29-11.2l-1.6-.5 0 0c-11-3.3-24.3-7.3-34.8-13.7c-12-7.2-22.6-18.9-22.7-37.3c-.1-19.4 10.8-32.8 23.8-40.5c7.5-4.4 15.8-7.2 24.1-8.7V232c0-8.8 7.2-16 16-16z" /></svg>
                                    <p>Purchases and memberships</p>
                                </div>
                            </DropdownItem>
                            <DropdownItem key="dataInYoutube">
                                <div className="flex-row flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="0.9em" viewBox="0 0 640 512" fill="white"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3H178.3zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8L591.4 312z" /></svg>
                                    <p>Your data in Youtube</p>
                                </div>
                            </DropdownItem>
                        </DropdownSection>

                        <DropdownSection aria-label="Control" showDivider>
                            <DropdownItem key="appearence">
                                <div className="flex-row flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" fill="white"><path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z" /></svg>
                                    <p>Appearence: Dark</p>
                                </div>
                            </DropdownItem>
                            <DropdownItem key="language">
                                <div className="flex-row flex items-center gap-2.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 640 512" fill="white"><path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z" /></svg>
                                    <p>Language: British English</p>
                                </div>

                            </DropdownItem>
                            <DropdownItem key="restricted">
                                <div className="flex-row flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="white"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" /></svg>
                                    <p>Restricted Mode: Off</p>
                                </div>

                            </DropdownItem>
                            <DropdownItem key="location">
                                <div className="flex-row flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="white"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" /></svg>
                                    <p>Location: Indonesia</p>
                                </div>

                            </DropdownItem>
                            <DropdownItem key="keyboard">
                                <div className="flex-row flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="white"><path d="M64 112c-8.8 0-16 7.2-16 16V384c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H64zM0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM176 320H400c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm-72-72c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H360c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H360c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H440c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H440c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16z" /></svg>
                                    <p>Keyboard shortcuts</p>
                                </div>

                            </DropdownItem>
                        </DropdownSection>

                        <DropdownSection aria-label="Settings" showDivider>
                            <DropdownItem key="settings">
                                <div className="flex-row flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="white"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" /></svg>
                                    <p>Settings</p>
                                </div>

                            </DropdownItem>
                        </DropdownSection>

                        <DropdownSection aria-label="Help & Feedback">
                            <DropdownItem key="help">
                                <div className="flex-row flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="white"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                                    <p>Help</p>
                                </div>

                            </DropdownItem>
                            <DropdownItem key="send_feedback">
                                <div className="flex-row flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="white"><path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" /></svg>
                                    <p>Send feedback</p>
                                </div>

                            </DropdownItem>

                        </DropdownSection>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}
