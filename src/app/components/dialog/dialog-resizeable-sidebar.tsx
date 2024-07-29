import { PropsWithChildren } from "react";
import { Resizable } from "re-resizable";
interface Props {
    minWidth?: number;
}
export function DialogResizeableSidebar(props: PropsWithChildren<Props>) {
    const {minWidth = 220, children} = props;
    return (
        <Resizable
            minWidth={minWidth}
            maxWidth={320}
            defaultSize={{
                width: 260,
                height: "100%",
            }}
            style={{
                borderRight: '1px solid #f5f5f5'
            }}
        >
            {children}
        </Resizable>
    );
}
