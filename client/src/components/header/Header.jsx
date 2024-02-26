
import { AppBar, Toolbar, styled } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`
// const Image = styled('img')({
//     width: 100,
//     display: 'flex',
//     margin: 'auto',
//     padding: '50px 0 0'
// });


const Header = () => {

    const navigate = useNavigate();

    // const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    /*eslint-disable*/
    const logout = async () => navigate('/account');
        
    return (
        <Component>
             {/* <Image src={imageURL} alt="blog" /> */}
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/account'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;