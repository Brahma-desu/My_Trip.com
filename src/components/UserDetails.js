import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { Box, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function UserDetails(props) {

    const url = 'https://jsonplaceholder.typicode.com/posts';
    // const [posts, setPosts] = useState([]);
    // const [userId, setUserId] = useState([]);
    // console.log(userId);

    // useEffect(() => {
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             // setPosts(data);
    //             if(data.id === userId){
    //                 setPosts(userId.id)
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //         });
    // }, []);

// console.log(posts);
    return (
        <>
            <Menu />
            <Box sx={{ textAlign: 'center', padding: '50px' }}>
                <Typography variant="h5">
                    User Details Show Page
                </Typography>
            </Box>
            <Table sx={{ minWidth: 200, width: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">User Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Phone Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.userDetails.map((data) => {
                        // {setUserId(data.id)}
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
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <Box>

            </Box>
        </>
    )
}
export default UserDetails;