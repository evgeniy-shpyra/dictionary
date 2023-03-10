import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import useErrorHandler from '../../../hooks/useErrorHandler'

import { dictionaryApi } from '../../../redux/services/dictionaryApi'
import AddDictionary from './AddDictionary'
import MyDictionary from './MyDictionary'
import MyDictionaryLoader from './MyDictionaryLoader'

const MyDictionaries: React.FC = () => {
    const navigate = useNavigate()
    const {
        data: myDictionaries,
        error,
        isLoading,
    } = dictionaryApi.useGetMyDictionariesQuery()

    useErrorHandler(error as string)

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const addDictionaryHandler = () => {
        navigate('/create-dictionary')
    }

    return (
        <div className="flex flex-wrap items-start justify-between">
            {!isLoading &&
                myDictionaries &&
                myDictionaries.map((item) => (
                    <MyDictionary
                        key={item.id}
                        name={item.name}
                        words={item.total}
                        learnedWords={item.learned}
                        id={item.id}
                        access={item.isPublic ? 'public' : 'private'}
                    />
                ))}
            {myDictionaries && myDictionaries.length === 0 && isLoading && (
                <MyDictionaryLoader number={6} />
            )}
            {!isLoading && <AddDictionary onClick={addDictionaryHandler} />}
        </div>
    )
}

export default MyDictionaries
