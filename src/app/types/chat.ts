export interface DialogType {
    avatar: string;
    dialogId: number;
    title: string;
    subTitle: string;
    read: boolean;
    count: number;
    timestamp: number;
}

export enum MessageType {
    Link= "link",
    Pic = "pic",
    Text = "text",

}
export enum MessageDirection {
    Send = 0,
    Receive,
}

export interface Message {
    avatar: string;
    message: string;
    message_type: MessageType;
    time: number;
    direction?: MessageDirection;
}