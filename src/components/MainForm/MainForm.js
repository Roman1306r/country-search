import React from "react";
import search from "../../assets/icon/search.png";



const MainForm = ({selectRegion, value, setValue, setCurrentOption}) => {






    const optionsArray = selectRegion.map((select, idx) => <option key={idx} value={select}>{select}</option>)
    return (<div className="main__form">
                <div className="search"><img src={search} alt="search" /><input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search for a country..." type="text" /></div>
                <div className="select">
                    <select  onChange={(event => setCurrentOption(event.target.value))}>
                        <option defaultChecked value="" >Filter by Region</option>
                        {optionsArray}
                    </select>
                </div>
            </div>);
}

export default MainForm;
