import React, { FunctionComponent, ReactNode } from "react";

const Layout: FunctionComponent<Props> = ({ children }) => (
    <div className="layout">
        <main>{children}</main>
    </div>
);

type Props = {
    children: ReactNode;
};

export default Layout;
