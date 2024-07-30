"use client";

import styles from "./home.module.scss";
import {SideBar} from "../../components/sidebar/sidebar";

import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import dynamic from "next/dynamic";
import {Path} from "@/app/constants";
import {DialogMessage} from "@/app/components/dialog/message/dialog-message";

const Chat = dynamic(async () => (await import("@/app/pages/chat/chat")).Chat);
const Role = dynamic(async () => (await import("@/app/pages/role/role")).Role);

function Screen() {
    return (
        <div className={styles.container}>
            {/* 工具菜单 */}
            <SideBar/>
            {/*<div>*/}
            {/*    sidebar*/}
            {/*</div>*/}

            {/* 路由地址 */}
            <div className={styles["window-content"]}>
                {/* 这里配置了路由如何跳转 */}
                <Routes>
                    <Route path={Path.Home} element={<Chat/>}/>
                    {/*配置子路由*/}
                    <Route path={Path.Chat} element={<Chat/>}>
                        <Route path=":id" element={<DialogMessage/>}/>
                    </Route>
                    <Route path={Path.Role} element={<Role/>}/>
                </Routes>
            </div>
        </div>
    );
}

export function Home() {
    return (
        <Router>
            <Screen/>
        </Router>
    );
}