import React, {useState} from 'react';
import {Servicii} from '../data/Servicii';
import FlatList from 'flatlist-react';
import ServiceCard from "../components/ServiceCard";
import {useHistory} from "react-router";

const MainScreen = () => {
    const [data, setData] = useState(Servicii);
    const [filteredData, setFilteredData] = useState('');
    const [value, setValue] = useState();
    const history = useHistory()

    const search = searchText => {
        let filteredData = data.filter(item => {
            return item.title.toLowerCase().includes(searchText) || item.title.toLowerCase() === searchText

        });
        setFilteredData(filteredData);
        setValue(searchText);
    };
    const renderEachItem = itemData => {
        return (
            <ServiceCard
                color={itemData.color}
                title={itemData.title}
                uri={itemData.uri}
                onPress={() => history.push({
                    pathname: '/serviceDetailScreen',
                    state: {
                        serviciuId : itemData.id,
                        serviciuTitle:itemData.title,
                        serviciuUri: itemData.uri,
                    }
                })}
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
                    onChange={e => search(e.target.value)}
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
