import  React, { useState, useEffect } from 'react';
import  Select from 'react-select'
import { apiRequest } from './GlobalVars';

export default function DropDownListComponent(props) {

    const [isLoading, setLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState("None");
    const [options, setOptions] = useState(props.options)

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        // Call handler to load the data for the selected subreddit
        props.handleChange(selectedOption.value);
    }
    
    const loadOptionsFromRemote = ()=> {
        if(props.url){
            apiRequest(props.url, "GET")
            .then((response)=>{
                setOptions(response.data)
            }).catch((error)=>{
                console.log("Lens load error")
                console.log(error);
            })

        }
    }

    
    useEffect(()=>{
        setOptions(props.options);
    });

     return( 
            <Select  
                    defaultValue={props.defaultValue}
                    className={props.className}
                    placeholder={props.placeholder}
                    value={selectedOption}
                    options={options}
                    onChange={handleChange}
                />
        );
    
}

