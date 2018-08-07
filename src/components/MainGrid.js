import React, {Component} from 'react';
import Grid from '@material-ui/core/Table';
import {connect} from 'react-redux';
import MainTable from './MainTable';
import {getData} from "../action/action";
import Spinner from "./Spinner.js";
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        width: '80%',
        margin: '0 auto'
    }

});

class MainGrid extends Component {
    componentWillMount() {
        this.props.load();
    }

    render() {
        const {classes, loadData} = this.props;
        if (loadData) return (
            <Grid container={true} md={12} className={classes.root} justify="center">
                <Grid item>
                   <Spinner/>
                </Grid>
            </Grid>
        );
        else return (
            <Grid container={true} md={12} className={classes.root} justify="center">
                <Grid item>
                    <MainTable/>
                </Grid>

            </Grid>
        )
    }
}

const styledMainGrid = withStyles(styles)(MainGrid);
const mapStateToProps = (state) => {
    return {
        loadData: state.loadData
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        // onDelete: id => dispatch(deleteTodo(id)),
        load: () => dispatch(getData())
    }

};
export default connect(mapStateToProps, mapDispatchToProps)(styledMainGrid);