import React, { useContext, useEffect } from 'react'
import Layout from "../layout/layout.component";
import { RepositoriesContext } from "../context";
import RepositoriesGallery from "../repositories/repositories.component";


const BookMakrks = () => {
    const { getBookmarks, bookMarks } = useContext(RepositoriesContext);
    useEffect(() => {
        getBookmarks()
    }, [])
    return (
        <Layout>
           <h1 className="text-center">Bookmarked Repositories</h1>
            <RepositoriesGallery type={"BookMarks"} repositories={bookMarks} />
        </Layout>
    )
}
export default BookMakrks;