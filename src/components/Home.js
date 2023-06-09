import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Menu from './Menu';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Home(props) {
    console.log(props.albums);
    return (
        <>
            <Menu />
            <Box sx={{ textAlign: 'center', padding: '50px' }}>
                <Typography variant="h5">
                    The User List's
                </Typography>
            </Box>
            <Box sx={{ width: '100%' }}>
                <>
                    <Table sx={{ minWidth: 200, }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">ID</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">User Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Phone Number</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.albums.map((data) => {
                                return (
                                    <TableRow
                                        key={data.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="right">{data.id}</TableCell>
                                        <TableCell align="right" component="th" scope="row">
                                            {data.name}
                                        </TableCell>
                                        <TableCell align="right">{data.username}</TableCell>
                                        <TableCell align="right">{data.email}</TableCell>
                                        <TableCell align="right">{data.phone}</TableCell>
                                        <TableCell align="right"  >
                                            <Link to='/UserDetails' >
                                                <Button size="small" variant="contained" onClick={() => (props.viewFromList(data.id))} className='view-btn'>View</Button>
                                            </Link>
                                            <Link to='/UserPosts'  >
                                                <Button size="small" variant="contained" onClick={() => (props.userPosts(data.id))} className='view-btn'>User Posts</Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                )
                                //, 
                            })}
                        </TableBody>
                    </Table>
                </>
            </Box>

        </>
    )
}
export default Home;