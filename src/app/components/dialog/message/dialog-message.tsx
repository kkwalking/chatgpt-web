import styles from "./dialog-message.module.scss";
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Message, MessageDirection, MessageType} from "@/app/types/chat";
import {DialogMessageItem} from "@/app/components/dialog/message/dialog-message-item";
import {DialogMessageInput} from "@/app/components/dialog/message/dialog-message-input";

interface Props {
    id: string,
    title: string
}

/**
 * 聊天面板
 * @constructor
 */
export function DialogMessage() {
    const {id} = useParams();
    const location = useLocation();
    const title = location.state?.title || "新的对话";
    const [messages, setMessages] = useState<Message[]>([])

    // 可以通过接口查询数据
    const fetchDetail = async () => {

        const message01: Message = {
            avatar: "/role/psychological.png",
            message: "吹灭别人的灯，不会照亮自己吹灭别人的灯，不会照亮自己吹灭别人的灯，不会照亮自己吹灭别人的灯，不会照亮自己吹灭别人的灯，不会照亮自己吹灭别人的灯，不会照亮自己吹灭别人的灯，不会照亮自己吹灭别人的灯，不会照亮自己",
            message_type: MessageType.Text,
            time: Date.now(),
            direction: MessageDirection.Receive
        }

        const message02: Message = {
            avatar: "/role/runny-nose.png",
            message: "大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！大师我悟了！",
            message_type: MessageType.Text,
            time: Date.now(),
            direction: MessageDirection.Send
        }

        setMessages([message01, message02]);
    }

    // 输入事件
    const onEnter = (value: string) => {
        setMessages([...messages, {
            avatar: "/role/runny-nose.png",
            message: value,
            message_type: MessageType.Text,
            time: Date.now(),
            direction: MessageDirection.Send
        }])
    }

    // 刷新数据
    useEffect(() => {
        fetchDetail().then(r => {
        });
    }, [id]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>{title}</div>
            <div className={styles.scroll}>
                {messages?.map(
                    (message, index) => <DialogMessageItem message={message} key={index}/>)
                }
            </div>
            <DialogMessageInput onEnter={onEnter}/>
        </div>
    );

}