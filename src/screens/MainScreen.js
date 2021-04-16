import React, {useState} from 'react';
import {Servicii} from '../data/Servicii';
import FlatList from 'flatlist-react';
import ServiceCard from "../components/ServiceCard";
import {useHistory} from "react-router";

const MainScreen = () => {
    const [data, setData] = useState(Servicii);
    const [filteredData, setFilteredData] = useState();
    const [value, setValue] = useState();
    const history = useHistory()

    const search = searchText => {
        let filteredData = data.filter(item => {
            if (item.title.toLowerCase().includes(searchText) || item.title.toLowerCase() === searchText) {
                return item;
            }
        });
        setFilteredData(filteredData);
        setValue(searchText);
    };
    const renderEachItem = itemData => {
        return (
            <ServiceCard
                // color={itemData.item.color}
                // title={itemData.item.title}
                title={itemData.title}
                // uri={itemData.item.uri}
                onPress={() => {
                    history.push('/serviceDetailScreen')
                }}
            />
        )
    }
    return (
        <div>
            <div>
                <input
                    placeholder="Search..."
                    autoCapitalize="none"
                    autoCorrect={false}
                    // onChange={text => search(text)}
                    value={value}
                />
            </div>
            <div>
                <FlatList
                    list={filteredData ? filteredData : data}
                    renderItem={renderEachItem}
                    numColumns={1}/>
            </div>
        </div>
    )
}
export default MainScreen;
