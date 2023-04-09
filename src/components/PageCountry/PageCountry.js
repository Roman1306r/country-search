import React from "react";
import {checkLenghtSymbols, getCurrencies, getLanguages, getCarsInfo, getTimezone} from "../../common/utils/utils";
import map from '../../assets/icon/map.png';
import GridLoader from "react-spinners/GridLoader";




const PageCountry = ({country, setPageCountries, load}) => {




    if(load) return <div className="loader"><GridLoader color={'#878787'} size={35} /></div>
    return <div className="page__country">
                <div className="page__country-container">
                    <div className="back"><button onClick={() => setPageCountries(false)}>&#10229;  back</button></div>
                    <img className="mobile__flag" src={country.flags.png} alt={country.flags.alt} />
                    <div className="page__block">
                        <div className="page__left">
                            <img src={country.flags.png} alt={country.flags.alt} />
                            <img src={country.coatOfArms.png} alt="coatOfArms" />
                        </div>
                        <div className="page__body">
                            <h1>{country.name.official}</h1>
                            <table className="desktop">
                                <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>Un Member</th>
                                    <th>Currencies</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{country.status}</td>
                                    <td>{country.unMember ? 'yes' : 'no'}</td>
                                    <td>{getCurrencies(country.currencies)}</td>
                                </tr>
                                </tbody>
                            </table>
                            <table className="mobile">
                                <thead>
                                    <tr><th>Status</th></tr>
                                    <tr><th>Un Member</th></tr>
                                    <tr><th>Currencies</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>{country.status}</td></tr>
                                    <tr><td>{country.unMember ? 'yes' : 'no'}</td></tr>
                                    <tr><td>{getCurrencies(country.currencies)}</td></tr>
                                </tbody>
                            </table>
                            <div className="page__block-name">
                                <div>
                                    <p><b>Capital:</b></p>
                                    <p><b>Population:</b></p>
                                    <p><b>Region:</b></p>
                                    <p><b>Subregion:</b></p>
                                    <p><b>Into Russian:</b></p>
                                    <p><b>Landlocked:</b></p>
                                    <p><b>Car (side-signs):</b></p>
                                    <p><b>Languages:</b></p>
                                    <p><b>Timezone:</b></p>
                                </div>
                                <div>
                                    <p>{!country.capital ? 'Capital is no find' : country.capital[0] || '-'}</p>
                                    <p>{checkLenghtSymbols(country.population) || '-'}</p>
                                    <p>{country.region || '-'}</p>
                                    <p>{country.subregion || '-'}</p>
                                    <p>{country.translations.rus.common || '-'}</p>
                                    <p>{country.landlocked ? 'yes' : 'no' || '-'}</p>
                                    <p>{getCarsInfo(country.car) || '-'}</p>
                                    <p id="language">{getLanguages(country.languages) || '-'}</p>
                                    <p id="timezone">{getTimezone(country.timezones) || '-'}</p>
                                </div>
                            </div>
                            <a className="page__map" href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer"><img width="20" src={map} alt="map"/> Go to the map</a>
                        </div>
                    </div>
                </div>
            </div>
}

export default PageCountry;
