import React from "react";
import Menu from "./Menu";
import { Box, Typography, } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

function UserPosts(props) {

    console.log(props.userPosts);

    return (
        <>
            <Menu />
            <Box sx={{ textAlign: 'center', padding: '50px' }}>
                <Typography variant="h5">
                    User Posts
                </Typography>
            </Box>
            <Box>
                {props.userPosts.map((data) => {
                    return (
                        <Card sx={{ width: 400, height: 270, display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {data.title}
                                </Typography>
                                <Typography variant="body2">
                                    {data.body}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained">Update</Button>
                                <Button size="small" variant="contained" onClick={() => (props.userPostDelete(data.id))}>Delete</Button>
                            </CardActions>
                        </Card>
                    )
                })}

            </Box>
        </>
    )
}
export default UserPosts;