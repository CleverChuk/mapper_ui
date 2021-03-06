import React from 'react'
import DropDownListComponent from './DropDownListComponent';
import Slider from '@material-ui/core/Slider';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ColorComponent from './ColorComponent';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import API from "./GlobalVars"

const defaultMechanism = [{
    value: "cc",
    label: "Connected Components"
},
{
    value: "k-means",
    label: "K-means"
}
]

const defaultFilters = [{
    value: "reading_level",
    label: "Reading Level"
},
{
    value: "sentiment",
    label: "Sentiment"
}
]

/*


            "lgl",
            "mds", "random", "rt", "tree"
            "rt_circular", "reingold_tilford",

*/
const defaultLayout = [
    {
        value:"auto",
        label:"automatic"
    },
    // { // require special backend handling
    //     value:"bipartite",
    //     label:"bipartite"
    // },
    {
        value:"circle",
        label:"Circular"
    },
    {
        value:"davidson_harel",
        label:"Davidson Harel"
    },
    {
        value: "force_directed",
        label: "Force Directed"
    },
    {
        value:"fr",
        label:"Fruchterman Reigold"
    },
    {
        value:"graphopt",
        label:"Graphopt"
    },
    {
        value: "hierarchy",
        label: "Hierarchy"
    },
    {
        value: "kk",
        label: "Kamada Kawai"
    },
    {
        value: "mds",
        label: "MDS"
    },
    {
        value: "random",
        label: "Random"
    },
    {
        value: "reingold_tilford_circular",
        label: "Reingold Tilford circular"
    },
    {
        value: "sphere",
        label: "Sphere"
    },
    {
        value:"star",
        label:"Star"
    },
    {
        value:"sugiyama",
        label:"Sugiyama"
    },
    {
        value: "timeline",
        label: "Timeline"
    },
]
const useStyles = makeStyles(theme => ({
    select: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },

    sliders: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },

    separator: {
        height: "25px",
    },

    colors: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },

    fab: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(30),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function ControlsComponent(props) {
    const classNames = useStyles();
    return (
        <div >

            <DropDownListComponent
                handleChange={props.handleClusteringAlgorithmSelect}
                className={classNames.select}
                options={defaultMechanism}
                placeholder={"Select Clustering Algorithm"} />
            <div className={classNames.separator} />

            <DropDownListComponent
                url={`${API}lenses`}
                handleChange={props.handleFilterSelect}
                className={classNames.select}
                options={props.lenses}
                placeholder={"Select topological lens"} />
            <div className={classNames.separator} />

            <DropDownListComponent
                handleChange={props.handleLayoutSelect}
                className={classNames.select}
                options={defaultLayout}
                placeholder={"Select Layout"} />
            <div className={classNames.separator} />

            <Typography className={classNames.sliders} id="discrete-slider" gutterBottom>
                Epsilon
            </Typography>
            <Slider
                className={classNames.sliders}
                valueLabelDisplay={'auto'}
                aria-labelledby="discrete-slider-small-steps"
                min={0.5}
                step={0.25}
                onChange={props.handleEpsilonValueChange}
            />

            <div className={classNames.separator} />
            <Typography className={classNames.sliders} id="discrete-slider" gutterBottom>
                {props.algorithm == 'k-means' ? 'K' : 'Intervals'}
            </Typography>
            <Slider
                className={classNames.sliders}
                valueLabelDisplay={'auto'}
                min={1}
                onChange={props.handleIntervalChange}
            />

            <div className={classNames.separator} />
            <Fab
                variant="extended"
                aria-label="delete"
                onClick={props.handleloadGraphClick}
                className={classNames.fab}>
                <NavigationIcon className={classNames.extendedIcon} />
                Start Mapper
            </Fab>
            <div className={classNames.separator} />
            <ColorComponent
                className={classNames.colors}
                handleColorSchemeSelect={props.handleColorSchemeSelect}
                handleColorSelect={props.handleColorSelect} />
        </div>
    );

}

