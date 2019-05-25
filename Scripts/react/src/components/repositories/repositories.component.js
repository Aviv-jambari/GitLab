import React, { useContext, memo } from 'react'
import ThumbnAil from "../thumbnail/thumbnail.component";
import Search from "../search/searchrepositories.component";
import { FaExclamationCircle } from 'react-icons/fa';

const Repositories = props => {
    const { type, repositories } = props;


    return (
        <>
         
            {
                (type == "repositories") ? <Search /> : ""
            }
            {
                (repositories.length > 0) ? <div className="row">
                    {repositories.map(item => (<ThumbnAil item={item} key={item.id} />))}
                </div> : <div className="container">
                        <h3 className="text-center">
                            No {(type == "repositories") ? "repositories" : "bookmarked repositories"}

                        </h3>
                        <div className="text-center">
                            <FaExclamationCircle />
                        </div>
                    </div>



            }
        </>
    )
}

export default memo(Repositories);