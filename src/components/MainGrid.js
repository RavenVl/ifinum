import React, {Component} from 'react';
import Grid from '@material-ui/core/Table';
import {connect} from 'react-redux';
import MainTable from './MainTable';
import {GET_DATA} from "../action/actionType";
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        width: '70%'
    }

});

class MainGrid extends Component {
    componentWillMount() {
        this.props.load();
    }

    render() {
        const {classes, loadData} = this.props;
        console.log(loadData);
        if (loadData) return (
            <Grid container={true} md={12} className={classes.root} justify="center">
                <Grid item>
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
        load: () => dispatch({type: GET_DATA})
    }

};
export default connect(mapStateToProps, mapDispatchToProps)(styledMainGrid);