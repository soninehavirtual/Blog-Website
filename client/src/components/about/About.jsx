
import { Box, styled, Typography } from '@mui/material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Blog - Create Your Space</Typography>
                <Text variant="h5">Welcome to blog, your go-to destination for a rich tapestry of compelling stories, insightful articles, and a diverse range of perspectives. Our platform is a digital sanctuary where words come alive, offering a harmonious blend of information and inspiration.     
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;