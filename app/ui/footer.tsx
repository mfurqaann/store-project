'use client'

import { logout } from "@/lib/actions"

function Footer({ setDarkMode }: { setDarkMode: React.Dispatch<React.SetStateAction<string>> }) {
    return (
        <div className='flex flex-wrap justify-between px-10 items-end w-full h-32 mb-3'>
            <div>
                <div className='dark:text-neutral-200 text-2xl mb-2'>Find Me</div>
                <div className='flex gap-1'>
                    <a href='https://github.com/mfurqaann' target='_blank'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-12 h-12 text-gray-900 dark:text-white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 4.307 2.797 7.967 6.677 9.26.488.09.665-.212.665-.472 0-.233-.008-.847-.013-1.663-2.717.59-3.29-1.31-3.29-1.31-.445-1.13-1.086-1.43-1.086-1.43-.888-.607.067-.595.067-.595  .983.07 1.5 1.01 1.5 1.01.873 1.497 2.29 1.065 2.847.815.09-.634.34-1.064.618-1.31-2.168-.247-4.448-1.085-4.448-4.83 0-1.068.38-1.94 1.008-2.624-.1-.248-.437-1.24.096-2.585 0 0 .82-.263 2.69 1.003A9.374 9.374 0 0 1 12 6.817c.83.004 1.667.112 2.448.33 1.87-1.266 2.69-1.003 2.69-1.003.533 1.345.197 2.337.097 2.585.63.684 1.008 1.556 1.008 2.624 0 3.756-2.286 4.58-4.462 4.822.35.3.662.895.662 1.805 0 1.304-.012 2.354-.012 2.674 0 .262.176.564.67.472A9.76 9.76 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75Z"
                                clipRule="evenodd"
                            />
                        </svg>

                    </a>
                    <a href='https://www.linkedin.com/in/mfurqaann/' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#FFF" viewBox="0 0 256 256" className='w-12 h-12 hidden dark:block'>
                            <path fill="#fff" strokeMiterlimit="10" d="M15 9c-2.75 0-5 2.25-5 5v50c0 2.75 2.25 5 5 5h50c2.75 0 5-2.25 5-5V14c0-2.75-2.25-5-5-5zm0 2h50c1.668 0 3 1.332 3 3v50c0 1.668-1.332 3-3 3H15c-1.668 0-3-1.332-3-3V14c0-1.668 1.332-3 3-3m8.902 5.984c-3.3 0-5.996 2.696-5.996 5.989 0 3.297 2.696 5.992 5.996 5.992 3.293 0 5.985-2.695 5.985-5.992 0-3.293-2.692-5.989-5.985-5.989M36 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m-36.098 1.984a3.977 3.977 0 0 1 3.985 3.989 3.98 3.98 0 0 1-3.985 3.992 3.98 3.98 0 0 1-3.996-3.992 3.977 3.977 0 0 1 3.996-3.989m26.2 11.075c-3.164 0-5.594 1.23-7.258 2.808v-2.12H32.598v29.675H43.19V45.734c0-1.742.2-3.375.778-4.425.582-1.055 1.406-1.684 3.383-1.684 1.894 0 2.5.664 2.96 1.828.461 1.168.512 2.91.512 4.508v14.46h9.598v-2l1 1V44.243c0-3.8-.375-7.27-2.047-9.918-1.672-2.652-4.7-4.265-9.273-4.265m-31.508.687v29.676h10.61V30.746zm31.508 1.313c4.136 0 6.27 1.25 7.582 3.332 1.312 2.078 1.738 5.195 1.738 8.851v14.18h-6.598V45.96c0-1.61.02-3.543-.652-5.242-.668-1.696-2.3-3.094-4.82-3.094-2.5 0-4.254 1.117-5.133 2.719-.88 1.597-1.028 3.52-1.028 5.39v12.688h-6.593V32.746h6.246v3.781h1.722l.282-.53c.972-1.84 3.433-3.938 7.254-3.938m-29.508.687h6.61v25.676h-6.61z" fontFamily="none" fontSize="none" fontWeight="none" style={{ mixBlendMode: "normal" }} textAnchor="none" transform="scale(3.2)"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill='currentColor' className='w-12 h-12 dark:hidden'>
                            <rect width="50" height="50" x="7" y="7" fill="#58b5e8" rx="6" ry="6"></rect>
                            <path fill="#faefde" d="M19.5 19A3.5 3.5 0 1 0 19.5 26 3.5 3.5 0 1 0 19.5 19zM39.76 28c-2.21 0-5 1.78-6.19 2.79V29.46a1 1 0 0 0-1-1H27.48a1 1 0 0 0-1 1v21a1 1 0 0 0 1 1h5.4a1 1 0 0 0 1-1V39.88c0-3.16 1.78-5.34 3.89-5.34s3.37 2.39 3.37 5.51V50.48a1 1 0 0 0 1 1h5.4a1 1 0 0 0 1-1V38.77C48.4 33.44 47.37 28 39.76 28zM16 29H23V51H16z"></path>
                            <path fill="#65c5ef" d="M11,7H53a4,4,0,0,1,4,4v0a3,3,0,0,1-3,3H10a3,3,0,0,1-3-3v0a4,4,0,0,1,4-4Z"></path>
                            <path fill="#8d6c9f" d="M23 28H16a1 1 0 0 0-1 1V51a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V29A1 1 0 0 0 23 28zM22 50H17V30h5zM39.88 27.44a8.47 8.47 0 0 0-5.44 1.88V29a1 1 0 0 0-1-1H27a1 1 0 0 0-1 1V51a1 1 0 0 0 1 1h6.7a1 1 0 0 0 1-1V39.89c0-3.31.82-4.55 3-4.55s2.49 1.46 2.49 4.72V51a1 1 0 0 0 1 1h6.71a1 1 0 0 0 1-1V38.72C48.92 33.14 47.85 27.44 39.88 27.44zm7 22.56H42.21V40.06c0-2.35 0-6.72-4.49-6.72-5 0-5 4.93-5 6.55V50H28V30h4.43v2a1.08 1.08 0 0 0 1.09 1 1 1 0 0 0 .88-.53 6.07 6.07 0 0 1 5.46-3c5.87 0 7 3.55 7 9.29zM19.5 18A4.5 4.5 0 1 0 24 22.5 4.5 4.5 0 0 0 19.5 18zm0 7.33a2.83 2.83 0 1 1 2.83-2.83A2.83 2.83 0 0 1 19.5 25.33z"></path>
                            <path fill="#8d6c9f" d="M51,6H13a7,7,0,0,0-7,7V51a7,7,0,0,0,7,7H51a7,7,0,0,0,7-7V13A7,7,0,0,0,51,6Zm5,45a5,5,0,0,1-5,5H13a5,5,0,0,1-5-5V13a5,5,0,0,1,5-5H51a5,5,0,0,1,5,5Z"></path>
                            <path fill="#8d6c9f" d="M17 16a1 1 0 0 0 1-1V13a1 1 0 0 0-2 0v2A1 1 0 0 0 17 16zM12 12a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V13A1 1 0 0 0 12 12zM32 16a1 1 0 0 0 1-1V13a1 1 0 0 0-2 0v2A1 1 0 0 0 32 16zM37 16a1 1 0 0 0 1-1V13a1 1 0 0 0-2 0v2A1 1 0 0 0 37 16zM42 16a1 1 0 0 0 1-1V13a1 1 0 0 0-2 0v2A1 1 0 0 0 42 16zM47 16a1 1 0 0 0 1-1V13a1 1 0 0 0-2 0v2A1 1 0 0 0 47 16zM52 12a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V13A1 1 0 0 0 52 12zM22 16a1 1 0 0 0 1-1V13a1 1 0 0 0-2 0v2A1 1 0 0 0 22 16zM27 16a1 1 0 0 0 1-1V13a1 1 0 0 0-2 0v2A1 1 0 0 0 27 16z"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div>
                <button
                    onClick={async () => await logout()}
                    className="w-10 h-10 border-2 border-black rounded-md dark:border-white mr-2">
                    <svg className="size-6 mx-auto dark:stroke-white" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                </button>
                <button
                    onClick={() => setDarkMode('light')}
                    className='w-10 h-10 border-2 border-black rounded-md dark:border-white mr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-auto dark:stroke-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                </button>
                <button
                    onClick={() => setDarkMode('dark')}
                    className='w-10 h-10 border-2 border-black dark:border-white rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-auto dark:stroke-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Footer