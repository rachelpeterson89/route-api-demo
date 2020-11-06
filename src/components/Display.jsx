import { useState, useEffect } from 'react';
import axios from 'axios';
import FactCard from './FactCard';

const Display = props => {

    const [ facts, setFacts ] = useState([]);

    useEffect(() => {
        axios.get(`https://cat-fact.herokuapp.com/facts/random?animal_type=${ props.category }&amount=${ props.amount }`)
            .then(res => setFacts(res.data))
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [props.amount])
    console.log(facts)

    return (
        <div>
            <h2 className="text-center">{ props.category.charAt(0) + props.category.slice(1)} Facts</h2>

            {/* <div>
                <h1>{ facts }</h1>
            </div> */}

            { facts ?
                facts.map(( fact, i ) => {
                    return <FactCard 
                                key={i} 
                                fact={fact}
                            />
                }) : <div></div>
            }
        </div>
    )

};

export default Display;