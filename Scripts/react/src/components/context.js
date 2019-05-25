

import React, { useState, useEffect } from 'react';

export const RepositoriesContext = React.createContext();
const { Provider } = RepositoriesContext;


const RepositoriesProvider = props => {
    //states
    const [repositories, setrepositories] = useState([]);
    const [bookMarks, setbookMarks] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false);
    useEffect(() => {
        getBookmarks();
    }, [])

    //actions

    //search api for repository by name
    const searchRepositories = async (name) => {
        setLoadingStatus(true);
        await fetch(`https://api.github.com/search/repositories?q=${name}`).then(res => res.json())
            .then(data => {
                setrepositories(data.items)
            })
        setLoadingStatus(false);
    }

    //get all bookmarks held in session
    const getBookmarks = async () => {
        
        setLoadingStatus(true);
        fetch("/Rrepositories/getall").then(response => response.json()).then(bookmarks => {
            setbookMarks(bookmarks)
        }).catch(err => console.log(err));
        setLoadingStatus(false);
    }
    //add bookmark to session
    const addBookmarks = async (bookmark) => {
        let temp = bookMarks;
        temp.push(bookmark);
        updateBookmarks(temp)
    }

    const removeBookmarks = async (bookmark) => {
        let temp = bookMarks;
        let status = true;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id == bookmark.id) {
                temp.splice(i, 1);
                break;
            }
        }
        updateBookmarks(temp)
    }
    const updateBookmarks = async (bookmark) => {
        setLoadingStatus(true);
        await fetch("/Rrepositories/Add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ repository: JSON.stringify(bookmark) }),
        }).then(response => response.json()).then(data => {
            setbookMarks(bookmark);
            return true;
        }).catch(err => console.log(err));
        setLoadingStatus(false);
    }
    //state object
    const state = {
        repositories: repositories,
        searchRepositories: searchRepositories,
        loadingStatus: loadingStatus,
        bookMarks: bookMarks,
        addBookmarks: addBookmarks,
        removeBookmarks: removeBookmarks,
        getBookmarks: getBookmarks

    }
    return (<Provider value={state}>
        {props.children}
    </Provider>)


}
export default RepositoriesProvider;