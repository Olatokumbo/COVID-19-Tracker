import React from "react";
import {Cards, Charts, CountryPicker} from "./components"
import styles from "./App.module.css";
import {fetchData} from "./api";

class App extends React.Component{
    state={
        data:{},
        country: ''
    }


async componentDidMount(){
const fetchedData = await fetchData();
// console.log(fetchedData);
this.setState({data:fetchedData})

}

handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    // console.log(fetchedData);
    this.setState({data:fetchedData, country: country})
}
    render() {
        const {data, country}= this.state;
        return(
            <div className={styles.container}>
            <h1 className={styles.header}>COVID-19 TRACKER</h1>
            <Cards data={this.state.data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Charts data={data} country={country}/>
            </div>
        );
    }
};


export default App;