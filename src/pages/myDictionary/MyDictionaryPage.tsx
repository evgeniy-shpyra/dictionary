import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useParams } from 'react-router-dom'

import AddWord from '../../components/myDictionaries/myDictionary/AddWord'
import MyDictionaryHeader from '../../components/myDictionaries/myDictionary/MyDictionaryHeader'
import Words from '../../components/myDictionaries/myDictionary/Words'
import FullPageWhiteContainer from '../../components/containers/FullPageWhiteContainer'
import HeaderUnderFullPage from '../../components/containers/HeaderUnderFullPage'
import { useAppDispatch } from '../../hooks/reduxHooks'
import useErrorHandler from '../../hooks/useErrorHandler'
import {
    deleteWordToStudy,
    setTotalInformationAboutMyDictionary,
} from '../../redux/features'

import { dictionaryApi } from '../../redux/services/dictionaryApi'
import { IWord } from '../../types/models'
import PageContainer from '../../components/containers/PageContainer'

const DictionaryPage: React.FC = () => {
    const { id, name, access } = useParams()

    const dispatch = useAppDispatch()

    const [queryData, setQueryData] = React.useState<{
        page: number
    }>({ page: 1 })

    const [dataFromApi, setDataFromApi] = React.useState<IWord[]>([])

    const addWord = (newWord: IWord) => {
        setDataFromApi((prevData) => {
            return [newWord, ...prevData]
        })
    }

    const { data, error, isLoading } =
        dictionaryApi.useGetWordsFromMyDictionaryQuery({
            page: queryData.page,
            dictionaryId: Number(id),
        })

    React.useEffect(() => {
        if (data) dispatch(setTotalInformationAboutMyDictionary(data))
    }, [data])



    React.useEffect(() => {
        if (data) {
            setDataFromApi(data.words)
        }
    }, [data])

    useErrorHandler(error as string)


    return (
        <PageContainer withNavbar withMenu>
            <div className="w-full max-w-[900px] h-full mx-auto pt-[40px]  animate-appearance">
                <HeaderUnderFullPage>
                    {id && name && access && (
                        <MyDictionaryHeader
                            dictionaryName={name}
                            access={access}
                            isLoading={isLoading}
                        />
                    )}
                </HeaderUnderFullPage>
                <FullPageWhiteContainer>
                    <main>
                        {id && (
                            <ul className="px-[5px] sm:px-[10px]">
                                <Words
                                    dictionaryId={Number(id)}
                                    words={dataFromApi}
                                    isLoading={isLoading}
                                />
                                <AddWord
                                    addWord={addWord}
                                    dictionaryId={Number(id)}
                                />
                            </ul>
                        )}
                    </main>
                </FullPageWhiteContainer>
            </div>
        </PageContainer>
    )
}

export default DictionaryPage
