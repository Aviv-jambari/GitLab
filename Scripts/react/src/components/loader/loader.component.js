import React, { memo, useContext } from 'react';
import { RepositoriesContext } from "../context";

import "./loader.component.scss";


const Loader = () => {
    const { loadingStatus } = useContext(RepositoriesContext);
    return (
        <div className={`loader ${(loadingStatus) ? "active" : ""}`}>
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    )
}
export default memo(Loader);