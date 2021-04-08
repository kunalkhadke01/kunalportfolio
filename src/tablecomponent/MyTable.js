import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BackContainer from '../content/backContainer';
// import { SortByAlpha } from '@material-ui/icons';
// import Draggable, { DraggableCore } from 'react-draggable'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function MyTable(props) {
    const classes = useStyles();
    const [data, setData] = useState({ rows: rows })
    const SortBy = (key) => {
        console.log(key)
        setData({ rows: data.rows.sort((a, b) => a[key] - b[key]) })
    }
    const eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
    };
    return (<div>
        <BackContainer onClick={() => props.history.goBack()} component={Paper} />
        <div>
            <TableContainer >
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right" onClick={() => SortBy('calories')}>
                                Calories</TableCell>
                            <TableCell align="right" onClick={() => SortBy('fat')}>
                                Fat&nbsp;(g)</TableCell>
                            <TableCell align="right" onClick={() => SortBy('carbs')}>Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right" onClick={() => SortBy('protein')}>Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.rows.map((row) => (
                            // <Draggable
                            //     axis="y"
                            // >
                            <TableRow >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                            // </Draggable>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </div>
    </div>
    );
}