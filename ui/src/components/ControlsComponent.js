import React from 'react'
import DropDownListComponent from './DropDownListComponent';
import Slider from '@material-ui/core/Slider';
import '../style/Controls.css'

import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ColorComponent from './ColorComponent';

const defaultSubreddits =  [
    {
    value: "programming",
    label: "Programming"
},
{
    value: "legaladvice",
    label: "Legal Advice"
},
{
    value: "politics",
    label: "Politics"
}
]

const defaultMechanism =  [{
    value: "cc",
    label: "Connected Components"
},
{
    value: "readinglevel",
    label: "Reading Level"
},
{
    value: "sentiment",
    label: "Sentiment"
}
]

class ControlsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clustering:"readinglevel"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    
    handleChange(event) {
      this.setState({clustering:event.target.value});
      //TODO: make request to backend to serve up data with the specified clustering
    }

    handleColorChange(color){
        //TODO
    }

    render(){

        return(
            <div className="Controls">
                <DropDownListComponent data={defaultSubreddits} placeholder={"Select a Subreddit"}/>
                <div className={"separator"}/>      
                <DropDownListComponent data={defaultMechanism} placeholder={"Select Clustering Mechanism"}/>

                <div className={"separator"}/>
                <div className={"separator"}/>
                <Typography id="discrete-slider" gutterBottom>
                    Epsilon
                </Typography>
                <Slider 
                    className={"sliders"}
                    valueLabelDisplay={'auto'}                    
                    aria-labelledby="discrete-slider-small-steps"
                    min={0}
                    step={0.001}
                    />
                
                <div className={"separator"}/>
                <Typography id="discrete-slider" gutterBottom>
                    Intervals
                </Typography>
                <Slider 
                    className={"sliders"}
                    valueLabelDisplay={'auto'}
                    min={1}
                    />

                <div className={"separator"}/>
                <ColorComponent/>
            </div>
        );
    }
}

export default ControlsComponent;