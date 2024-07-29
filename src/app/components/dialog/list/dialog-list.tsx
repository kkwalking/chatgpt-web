import styles from "./dialog-list.module.scss";
import {DialogItem} from "@/app/components/dialog/item/dialog-item";
import {DialogType} from "@/app/types/chat";
import {DialogResizeableSidebar} from "@/app/components/dialog/dialog-resizeable-sidebar";
import {useState} from "react";

/**
 * 对话框列表
 */
export function DialogList() {
    // 初始状态包含测试数据
    const [dialogs, setDialogs] = useState<DialogType[]>([
        {
            avatar: '/role/bugstack.png',
            dialogId: 123,
            read: true,
            subTitle: '写个java冒泡排序?',
            timestamp: Date.now(),
            title: '普通对话',
            count: 1
        },
        {
            avatar: '/role/interview.png',
            dialogId: 124,
            read: true,
            subTitle: 'Hello, how are you?',
            timestamp: Date.now(),
            title: '面试官',
            count: 5
        }
    ]);

    const [selected, setSelected] = useState<DialogType>();


    return (
        // DialogResizeableSidebar 用于调整对话栏的大小
        <DialogResizeableSidebar>
            {/*头部操作*/}
            <div className={styles["dialog-head"]}>
                <div className={styles["dialog-search-box"]}><input type="text" placeholder="搜索"/></div>
                <div className={styles["dialog-search-add"]} onClick={() => {
                    // 获取当前最大 dialogId
                    const maxDialogId = dialogs.reduce((maxId, dialog) => Math.max(dialog.dialogId, maxId), 0);
                    // 心里咨询
                    const dialog03: DialogType = {
                        avatar: '/role/psychological.png',
                        dialogId: maxDialogId+1,
                        read: true,
                        subTitle: '吹灭别人的灯，不能照亮自己',
                        timestamp: Date.now(),
                        title: '心理咨询',
                        count: 100
                    };

                    // 使用 setDialogs 更新状态而不是直接修改 dialogs
                    setDialogs(prevDialogs => [dialog03, ...prevDialogs])

                    // 设置选中，这样会刷新数据
                    setSelected(dialog03);
                }}></div>
            </div>
            {/*对话列表*/}
            <div>
                {/*循环遍历数据，当有数据变更时会自动刷新到页面*/}
                {dialogs.map((dialog, index) => (
                    <DialogItem
                        key={dialog.dialogId}
                        dialog={dialog}
                        selected={selected?.dialogId === dialog.dialogId}
                        onClick={() => {
                            setSelected(dialog)
                        }}
                    />
                ))}
            </div>
        </DialogResizeableSidebar>
    );

}