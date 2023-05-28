import React from 'react'
import Content from '../../components/preview/Content'
import LineOfDictionaries from '../../components/preview/LineOfDictionaries'
import Header from '../../components/preview/Header'
import Banner from '../../components/preview/Banner'
import About from '../../components/preview/About'
import { useAppSelector } from '../../hooks/reduxHooks'
import { AuthorizationEnum } from '../../types'
import { useNavigate } from 'react-router-dom'
import { getMyDictionariesUrl } from '../../utils/navigateUrl'

const PreviewPage = () => {

    const authorizationStatus = useAppSelector(state => state.user.authorizationStatus)
    const navigation = useNavigate()
    React.useEffect(()=>{
        if(authorizationStatus === AuthorizationEnum.Login){
            navigation(getMyDictionariesUrl())
        }
    }, [authorizationStatus])

    return (
        <div className="h-full w-full animate-appearance flex flex-col">
            <Header />

            <main className="w-full flex-auto flex flex-col">
                <Banner />
                <Content>
                    <LineOfDictionaries />
                    <About />
                </Content>
            </main>
        </div>
    )
}

export default PreviewPage
