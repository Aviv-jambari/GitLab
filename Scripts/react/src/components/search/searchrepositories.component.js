import React, { useState, useContext, useRef, memo } from 'react'
import { RepositoriesContext } from "../context";
import { FaSearch } from "react-icons/fa";

const SearchRepositories = () => {
    const { searchRepositories } = useContext(RepositoriesContext);
    const [inputValue, setInputValue] = useState("");
    const searchInput = useRef(null);
    const onSubmit = (e) => {
        e.preventDefault();
        searchRepositories(inputValue)
    }
    const onCHange = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <form className="from-group">
            <div className="d-flex">
                <input ref={searchInput} className="form-control" type="text" value={inputValue} onChange={onCHange} placeholder="search github repositories" />
                <button onClick={onSubmit} className="btn btn-primary"> <FaSearch /></button>
            </div>
        </form>
    )
}

export default memo(SearchRepositories);