import styles from "./button.module.scss";

/**
 * 定义通用按钮函数 IconButton，就是一个按钮模板
 * @param props.onClick 按钮事件(可选)
 * @param props.icon 图标(可选)
 * @param props.className CSS 样式
 * @param props.title 图标名称
 * @param props.text 图标说明
 * */

// props就是外部调用传进来的对象，里面可以有onClick, icon等，这是在ts中通过在参数后面定义变量结构来约束的
export function IconButton(props: {
    onClick?: () => void;
    icon?: JSX.Element;
    className?: string;
    title?: string;
    text?: string;
    backgroundColor?: string;
}) {
    const {backgroundColor} = props;

    const buttonStyle = {
        backgroundColor: backgroundColor,
    };

    return (
        <button className={styles["icon-button"]} style={buttonStyle} onClick={props.onClick}>
            {props.icon && <div className={styles["icon-button-icon"]}>{props.icon}</div>}
            {props.text && <div className={styles["icon-button-text"]}>{props.text}</div>}
        </button>
    );
}
