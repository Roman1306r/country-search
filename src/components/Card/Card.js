import React from "react";
import {checkLenghtSymbols} from "../../common/utils/utils";



const Card = ({image, name, population, region, capital, getPageCountries, id}) => {



    return (<div onClick={() => getPageCountries(id)} className="card">
                <img src={image} alt={name} />
                <div className="card__body">
                    <h2>{name}</h2>
                    <p><b>Population:</b> {checkLenghtSymbols(population)}</p>
                    <p><b>Region:</b> {region}</p>
                    <p><b>Capital:</b> {!capital ? 'Capital is no find' : capital[0]}</p>
                </div>
            </div>);
}

export default Card;
