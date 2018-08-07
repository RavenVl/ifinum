import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        padding:'15px'
    },
    table: {
        minWidth: 700,
    },
    paper: {
        marginTop:'20px',
        padding:'10px'
    },
    tableHead:{
        backgroundColor:"grey",
        color: "white"
    }
});


function MainTable(props) {
    const {classes, data} = props;
    console.log(data);
    return (
        <Paper className={classes.root}>
            <Typography variant="display1" component="h1">
                Invoices
            </Typography>
            <Paper className={classes.paper}>
                <Typography variant="headline" component="h2">
                   Action
                </Typography>
                <Button variant="contained" color="primary" className={classes.button}>
                    Primary
                </Button>
            </Paper>
            <Paper className={classes.paper}>
                <Typography variant="headline" component="h2">
                    Invoices
                </Typography>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow className={classes.tableHead}>
                            <TableCell className={classes.tableHead} >Create</TableCell>
                            <TableCell className={classes.tableHead}numeric>No</TableCell>
                            <TableCell className={classes.tableHead}>Supply</TableCell>
                            <TableCell className={classes.tableHead}>Comment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(n => {
                            return (
                                <TableRow key={n.id}>
                                    <TableCell >{n.date_created}</TableCell>
                                    <TableCell  numeric>{n.number}</TableCell>
                                    <TableCell >{n.date_supply}</TableCell>
                                    <TableCell  >{n.comment}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        </Paper>
    );
}

MainTable.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
    return {
        data: state.data
    }
};

const MainTableWithStyles = withStyles(styles)(MainTable);
export default connect(mapStateToProps)(MainTableWithStyles);
