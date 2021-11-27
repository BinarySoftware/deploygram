import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React from 'react';
import axios from 'axios';

const PostReactions = (postId) => {
    const [isLiked, setIsLiked] = React.useState(false);

    React.useEffect( () => {
        setLikes();
    });

    const setLikes = async () => {
        await axios.get('https://deploygram.deployed.space/posts/' + postId + '/likes');
    };

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    const pStyle = {
        margin: 0,
        marginLeft: '5px'
    };

    const icon = () => {
        if (isLiked) {
            return (<FavoriteIcon />);
        }
        return (<FavoriteBorderIcon />);
    };

    return (
        <Box>
            <Stack direction="row" width="100%" marginX="auto">
                <button onClick={ toggleLike }>{ icon() }</button>
                <b><p style={pStyle}>9 likes</p></b>
            </Stack>
        </Box>
    );
};

export default PostReactions;
