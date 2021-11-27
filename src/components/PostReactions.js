import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const PostReactions = () => {
    const pStyle = {
        margin: 0,
        marginLeft: '5px'
    };

    return (
        <Box>
            <Stack direction="row" width="100%" marginX="auto">
                <FavoriteBorderIcon />
                <FavoriteIcon />
                <b><p style={pStyle}>9 likes</p></b>
            </Stack>
        </Box>
    );
};

export default PostReactions;
