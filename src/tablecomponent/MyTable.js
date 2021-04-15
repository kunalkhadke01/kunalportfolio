import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BackContainer from '../content/backContainer';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Moment from 'moment';
import { TrendingUpRounded } from '@material-ui/icons';
// import { SortByAlpha } from '@material-ui/icons';
// import Draggable, { DraggableCore } from 'react-draggable'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function MyTable(props) {
    const classes = useStyles();
    const [data, setData] = useState({ rows: [] })
    const [sort, setSort] = useState(false)
    const SortBy = (key) => {
        console.log(key)
        setData({ rows: data.rows.sort((a, b) => b[key] - a[key]) })
        setSort(true)
    }
    const Sort = (key) => {
        console.log(key)
        setData({ rows: data.rows.sort((a, b) => a[key] - b[key]) })
        setSort(false)
    }
    useEffect(() => {
        async function fetchData() {
            const SPACEINFO = await fetch('https://api.spacexdata.com/v2/launches')
                .then(r => r.json())
                .then(res => setData({ rows: res.slice(0, 10) }))
        }
        fetchData()
    }, [setData])
    const eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
    };
    console.log(data)
    return (<div>
        <BackContainer onClick={() => props.history.goBack()} component={Paper} title="DETAIL" />

        <TableContainer style={{ marginTop: 60 }}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Site Id</TableCell>
                        <TableCell align="right" >
                            lounch year    {sort == true ? <ArrowDownwardIcon onClick={() => Sort('launch_year')} /> : <ArrowUpwardIcon onClick={() => SortBy('launch_year')} />}</TableCell>

                        <TableCell align="right" onClick={() => SortBy('mission_name')}>
                            mission name</TableCell>
                        <TableCell align="right" onClick={() => SortBy('protlaunch_date_localein')}>local launch date</TableCell>
                        <TableCell align="right" onClick={() => SortBy('protelaunch_date_utcin')}>launch date utc</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.rows.map((row) => (
                        // <Draggable
                        //     axis="y"
                        // >
                        <TableRow >
                            <TableCell component="th" scope="row">
                                {row.launch_site.site_id}
                            </TableCell>
                            <TableCell align="right">{row.launch_year}</TableCell>
                            <TableCell align="right">{row.mission_name}</TableCell>
                            <TableCell align="right">{Moment(row.protlaunch_date_localein).format('L')}</TableCell>
                            <TableCell align="right">{Moment(row.launch_date_utc).format('L')}</TableCell>
                        </TableRow>
                        // </Draggable>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >

    </div>
    );
}