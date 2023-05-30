import React from 'react'
import useErrorHandler from '../../../hooks/useErrorHandler'
import { dictionaryApi } from '../../../redux/services/dictionaryApi'
import { IDictionary } from '../../../types/models'
import PublicDictionary from './PublicDictionary'
import PublicDictionaryLoader from './PublicDictionaryLoader'
import SearchBlock from './SearchBlock'

const PublicDictionaries: React.FC = () => {
    const [queryData, setQueryData] = React.useState<{
        name: string
    }>({ name: '' })

    const [dataFromApi, setDataFromApi] = React.useState<IDictionary[]>([])

  
    const { data, isLoading, error } =
        dictionaryApi.useGetAllPublicDictionariesQuery({name: queryData.name,})


    React.useEffect(() => {
        if (data) {
            setDataFromApi(data.dictionaries)
        }
    }, [data])

    const searchingDictionary = React.useCallback((value: string) => {
        setQueryData({name: value})
    }, [])

    useErrorHandler(React.useMemo(() => error as string, [error]))


    return (
        <>
            <SearchBlock onSearch={searchingDictionary} />
            <div className="pb-[80px] sm:pb-[40px] animate-appearance">
                {!isLoading &&
                    dataFromApi.map((item, index) => (
                        <div key={item.id}>
                            <PublicDictionary
                                name={item.name}
                                words={1}
                                id={item.id}
                            />
                        </div>
                    ))}
                {isLoading && <PublicDictionaryLoader number={10} />}
            </div>
        </>
    )
}

export default PublicDictionaries
