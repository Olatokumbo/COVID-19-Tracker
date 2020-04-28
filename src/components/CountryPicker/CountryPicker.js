import React, {useState, useEffect} from "react"
import styles from "./CountryPicker.css";
import {NativeSelect, FormControl} from "@material-ui/core";
import {fetchCountries} from "../../api";

    const CountryPicker =({handleCountryChange})=>{
        const [fetchedCountries, setfetchedCountries]=useState([]);

        useEffect(()=>{
            const fetchAPI = async() =>{
                setfetchedCountries(await fetchCountries());
            }
        
            fetchAPI();
        }, [setfetchedCountries]);

    return(
        <div>
        <FormControl className={styles.container}>
        <NativeSelect default="" onChange={(e)=>handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map((country, i)=><option key={i} value={country}>{country}</option>)}
        </NativeSelect>
        </FormControl>
        </div>
    )
};

export default CountryPicker;