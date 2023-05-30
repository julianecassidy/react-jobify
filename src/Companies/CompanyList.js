import { useEffect, useState } from "react";
import CompanyCardList from "./CompanyCardList";
import Loading from "../Loading";
import JobifyApi from "../Api/JobifyApi";
import Search from "../Search";

/**
 * Component for CompanyList
 * 
 * gets API data for companies
 * 
 * props: none
 * 
 * state: 
 *  - companies {[companies], isLoading}
 *  - searchTerm: string from search box
 * 
 * RoutesList -> CompanyList -> { Search, CompanyCardList }
 * 
 */
function CompanyList() {
    const [companies, setCompanies] = useState({ companiesData: [], isLoading: true })
    const [searchTerm, setSearchTerm] = useState('');
    // console.debug("CompanyList companies state: ", companies,
    //     "searchTerm state: ", searchTerm);


    //fetches list of companies from api after first render
    useEffect(function fetchCompaniesOnMount() {
        async function fetchCompanies() {
            const results = await JobifyApi.getCompanies();
            setCompanies({
                companiesData: results,
                isLoading: false
            });
        }
        fetchCompanies();
    }, []);

    //fetches companies from api after search submit filters; updateUser searchTerm state
    async function companySearch(searchName) {
        setSearchTerm(searchName);

        try {
            const results = await JobifyApi.getCompanies(searchName);
            setCompanies({
                companiesData: results,
                isLoading: false
            });
        } catch (err) {
            setCompanies({
                companiesData: [],
                isLoading: false
            });
        }
    }

    return (
        <div className="CompanyList">
            {companies.isLoading
                ? <Loading />
                : <div>
                    <Search search={companySearch} />
                    {searchTerm && <p>Showing results for "{searchTerm}"</p>}
                    {companies.companiesData.length ?
                        <CompanyCardList companies={companies.companiesData} /> :
                        <p>Sorry no results were found</p>}
                </div>}
        </div>
    );
}

export default CompanyList;