import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/reduxHooks'
import myDictionaryImg from '../../images/home-my-dictionaries.png'
import Button from '../input/Button'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
    const navigate = useNavigate()

    return (
        <header className="w-full bg-white/20 flex items-center h-[90px]">
            <div className="w-[900px] m-auto">
                <nav className="flex justify-between items-center">
                    <div>
                        <Link
                            to={'/dictionaries'}
                            style={{
                                color: 'white',
                                fontSize: '18px',
                            }}
                        >
                            Dictionaries
                        </Link>
                    </div>
                    <div className="flex">
                        <Button
                            size="medium"
                            styles="mr-[20px]"
                            color="#0086EA"
                            hoverColor="#53A0FF"
                            activeColor="#0D6CBD"
                            onClick={() => navigate('/register')}
                        >
                            Create account
                        </Button>
                        <Button
                            size="medium"
                            color="#1D9745"
                            hoverColor="#24b553"
                            activeColor="#157b2f"
                            onClick={() => navigate('/login')}
                        >
                            Login
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header

{
    /* <Button
size="large"
styles="mb-[13px]"
color="#0086EA"
hoverColor="#53A0FF"
activeColor="#0D6CBD"
onClick={() => navigate('/register')}
>
Create account
</Button>
<Button
size="large"
color="#1D9745"
hoverColor="#24b553"
activeColor="#157b2f"
onClick={() => navigate('/login')}
>
Login
</Button> */
}

{
    /* <img
                    src={myDictionaryImg}
                    className="h-full w-full object-contain"
                    alt="img"
                /> */
}