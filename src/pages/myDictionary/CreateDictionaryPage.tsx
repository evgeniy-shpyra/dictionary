import React from 'react'
import HeaderBlock from '../../components/createDictionary/HeaderBlock'
import Words from '../../components/createDictionary/Words'
import { nanoid } from 'nanoid'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { createDictionary } from '../../redux/features/dictionarySlice'
import { useNavigate } from 'react-router-dom'
import { openInfoBlock } from '../../redux/features/appSlice'

const CreateDictionaryPage: React.FC = () => {
    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const [nameValue, setNameValue] = React.useState('')
    const [errorName, setError] = React.useState<string>()

    const [access, setAccess] = React.useState<'public' | 'private'>('public')

    const onChangeAccessHandler = (trueId: string) => {
        if (trueId === 'public') setAccess(trueId)
        else if (trueId === 'private') setAccess(trueId)
    }
    const onChangeNameHandler = (e: React.ChangeEvent<any>) => {
        setError(undefined)
        setNameValue(e.target.value)
    }

    //----------------------------------------------------------

    const [words, setWords] = React.useState<
        Array<{
            word: string
            translation: string
            id: string
        }>
    >([{ word: '', translation: '', id: nanoid() }])
    const onAddWordHandler = () => {
        setWords((prev) => [
            ...prev,
            {
                word: '',
                translation: '',
                id: nanoid(),
            },
        ])
    }
    const onChangeDictionaryDataValueHandler = (data: {
        id: string
        word: string
        translation: string
    }) => {
        const prevArr = words

        const index = words.findIndex((item) => item.id == data.id)

        prevArr[index].translation = data.translation
        prevArr[index].word = data.word

        setWords(prevArr)
    }
    const onDeleteDictionaryHandler = (id: string) => {
        setWords((prev) => prev.filter((item) => item.id != id))
    }

    //---------------------------------------------------------

    const onSaveHandler = () => {
        if (nameValue === '') {
            setError('Required field')
            return
        }

        let isError = false

        words.forEach((item) => {
            if (item.translation === '' || item.word === '') {
                dispatch(
                    openInfoBlock({
                        type: 'error',
                        title: 'Error',
                        text: 'All fields must be filled',
                    })
                )
                isError = true
            }
        })

        if (isError) return

        const wordsWithoutId: Array<{ name: string; translation: string }> =
            words.map((item) => {
                return { name: item.word, translation: item.translation }
            })

        dispatch(
            createDictionary({
                dictionaryName: nameValue,
                words: wordsWithoutId,
                isPublic: access === 'public',
            })
        ).then((res) => {
            if (res.meta.requestStatus === 'fulfilled') {
                navigate('/')
            }
        })
    }

    return (
        <div className="px-[105px] animate-appearance pb-[40px]">
            <HeaderBlock
                onChangeAccess={onChangeAccessHandler}
                access={access}
                onChangeName={onChangeNameHandler}
                nameValue={nameValue}
                errorNameField={errorName}
            />
            <Words
                onSave={onSaveHandler}
                onAddWord={onAddWordHandler}
                words={words}
                onChangeDictionaryDataValue={onChangeDictionaryDataValueHandler}
                onDeleteDictionary={onDeleteDictionaryHandler}
            />
        </div>
    )
}

export default CreateDictionaryPage