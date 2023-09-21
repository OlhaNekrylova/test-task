import ProducstList from '../ProductsList/ProductsList';
import styled from './App.module.css';

export default function App () {
    return (
        <div className={styled.container}>
            <ProducstList />
        </div>   
    )
}