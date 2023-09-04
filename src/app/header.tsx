'use client';

import React from "react"
import "../styles/globals.css";
import MainIcon from "/public/wanted.svg";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <div className="fixed w-full top-0 bg-white shadow-sm block">
            <div className="relative max-w-5xl h-12 mx-auto block">
                <nav className="flex items-center justify-between flex-row flex-wrap h-full m-0 p-0 border-0">
                    <div className="flex items-center justify-between m-0 p-0 border-0">
                        <div className="flex m-0 p-0 border-0">
                            <button className="-mt-0.5 mr-3.5 p-0 border-0 bg-transparent cursor-pointer box-border inline-block text-center">
                                <MenuIcon className="w-6 object-contain align-middle"></MenuIcon>
                            </button>
                            <a className="block cursor-pointer m-0 p-0 border-0 box-border">
                                <MainIcon></MainIcon>
                            </a>
                        </div>
                    </div>
                    <ul className="h-full text-center m-0 p-0 border-0 box-border block">
                        <li className="h-full inline-block relative m-0 p-0 border-0 box-border">
                            <a className="relativein align-middle line-block">채용</a>
                        </li>
                        <li className="inline-block relative">
                            <a className="inline-block align-middle">이벤트</a>
                        </li>
                        <li className="inline-block relative">
                            <a className="inline-block align-middle">이력서</a>
                        </li>
                        <li className="inline-block relative">
                            <a className="inline-block align-middle">소셜</a>
                        </li>
                        <li className="inline-block relative">
                            <a className="inline-block align-middle">프리랜서</a>
                        </li>
                        <li className="inline-block relative">
                            <a className="inline-block align-middle">AI 합격예측</a>
                        </li>
                    </ul>
                    <aside className="py-2.5">
                        <ul>
                            <li></li>
                            <li></li>
                            <li className="inline-flex">
                                <div className="before:content-['|'] before:text-xs before:text-gray-300 before:mx-2.5 before:my-auto">
                                    <a className="text-xs text-gray-500 items-center border border-gray-300 rounded-3xl px-2.5 py-1.5">기업 서비스</a>
                                </div>
                            </li>
                            <li></li>
                        </ul>
                        <div></div>
                    </aside>
                </nav>
            </div>
        </div>
    );
}

export default Header