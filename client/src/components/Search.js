import React, {useState} from 'react';

const Search = (props) => { 

    const [name, setName] = useState('');

    const handleNameChange = (e) => {
       console.log(e.target.value);
       setName(e.target.value);
    }

    return (
        <>
        <input className="inputProfil" type="text" onInput={handleNameChange} value={name} ></input>
       </>
    );

}

export default Search; 
