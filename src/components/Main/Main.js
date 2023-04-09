import React, {useEffect, useState} from "react";
import axios from "axios";
import MainForm from "../MainForm/MainForm";
import Card from "../Card/Card";
import PageCountry from "../PageCountry/PageCountry";
import {getRegion} from "../../common/utils/utils";
import GridLoader from "react-spinners/GridLoader";


const Main = () => {
    const [countries, setCountries] = useState([])
    const [load, setLoad] = useState(false)
    const [selectRegion, setSelectRegion] = useState([])
    const [currentOption, setCurrentOption] = useState('')
    const [value, setValue] = useState('')
    const [pageCountries, setPageCountries] = useState(false)
    const [findCountry, setFindCountry] = useState({})



    function getCountry(arr) {
        if(currentOption !== '') arr = arr.filter(c => c.region === currentOption)
         return arr.map((country, idx) => <Card image={country.flags.png} id={country.name.common} getPageCountries={getPageCountries}  key={country.name.common} name={country.name.official} population={country.population} region={country.region} capital={country.capital}  />)
    }
    function getPageCountries(id) {
        setLoad(true)
        setPageCountries(true)
        setFindCountry(countries.find(c => c.name.common === id))
        setTimeout(() => setLoad(false), 2000)
    }
    useEffect(() => {
        async function getCountries() {
            try {
                setLoad(true)
                const url = 'https://restcountries.com/v3.1/all'
                const responce = await axios.get(url)
                return responce.data
            } catch (error) {
                alert(error.message)
            } finally {
                setTimeout(() => setLoad(false), 3000)
            }
        }
        getCountries().then(c => {
            setCountries(c)
            setSelectRegion(() => getRegion(c))
        })
    }, [])



    const filteredCountries = countries.filter(country => country.name.official.toLowerCase().includes(value.toLowerCase()))
    if(pageCountries) return <PageCountry load={load} country={findCountry} setPageCountries={setPageCountries} />
    return (<div className="main">
                    <MainForm value={value} setCurrentOption={setCurrentOption} setValue={setValue}  selectRegion={selectRegion} />
                    {load && <div className="loader"><GridLoader color={'#878787'} size={35} /></div>}
                    <div className="cards__country">{!load && getCountry(filteredCountries)}</div>
            </div>); 
}

export default Main;
