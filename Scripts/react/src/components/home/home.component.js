import React, { useContext, useEffect } from 'react'
import Layout from "../layout/layout.component";
import { RepositoriesContext } from "../context";
import RepositoriesGallery from "../repositories/repositories.component";


const Home = () => {
    const { repositories, searchRepositories } = useContext(RepositoriesContext);
    useEffect(() => {

    }, [])
    return (
        <Layout>
            <h1 className="text-center">Search Repositories</h1>
            <RepositoriesGallery type={"repositories"} repositories={repositories} />
        </Layout>
    )
}
export default Home;