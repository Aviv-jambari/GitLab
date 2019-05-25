import React, { useState, useContext, useEffect,memo } from 'react'
import { RepositoriesContext } from "../context";
import "./thumbnail.component.scss";
 

const ThumbNaill = props => {
    const { item } = props;
    const { owner } = item;
    const { bookMarks, addBookmarks, removeBookmarks, getBookmarks } = useContext(RepositoriesContext);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        isExist();
    }, [])
    const isExist = () => {
        for (let i = 0; i < bookMarks.length; i++) {
            let current = bookMarks[i];
            if (current.id == item.id) {
                setStatus(true);
                break;
            }
        }
    }
    const onBookMark = async () => {
        //  let isBookmarked = await addBookmarks(item);
        // setStatus(isBookmarked);
        if (!status) {
            //add
            let response = await addBookmarks(item);
            setStatus(true)
        }
        else {
            //remove
            let response = await removeBookmarks(item);
            setStatus(false)
        }
    }

    return (
        <div key={item.id} className="col-md-3 col-sm-4  ">
            <a href={owner.html_url} target="_blank">
                <h4 className="text-center elipses">{item.name}</h4>
                <div>
                    <img className="img-thumbnail" src={owner.avatar_url} />
                </div>
            </a>
            <br />
            <div className="text-center">
                <button onClick={onBookMark} className={` btn btn-${(status) ? "danger" : "success"}`}> {(status) ? "Unbookmark" : "Bookmark"}</button>
            </div>
        </div>
    )
}
export default memo(ThumbNaill);