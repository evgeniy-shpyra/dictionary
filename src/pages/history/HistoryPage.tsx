import React from 'react'
import PageContainer from '../../components/containers/PageContainer'
import { IHistory } from '../../types/models/IHistory'
import DateSession from '../../components/history/DateSession'

const history = [
    {
        historyID: 1,
        userId: 1,
        word: 'Car',
        isCorrect: true,
        createAt: '2023-05-28T17:50:40Z',
    },
    {
        historyID: 2,
        userId: 1,
        word: 'Important',
        isCorrect: true,
        createAt: '2023-05-28T17:50:40Z',
    },
    {
        historyID: 3,
        userId: 1,
        word: 'Bicycle',
        isCorrect: false,
        createAt: '2023-05-29T10:21:15Z',
    },
    {
        historyID: 4,
        userId: 1,
        word: 'Train',
        isCorrect: true,
        createAt: '2023-05-30T08:45:00Z',
    },
]

interface IDate {
    day: number | null
    month: number | null
    year: number | null
}

const createKey = (date: string) => {
    const objDate: IDate = {
        day: new Date(date).getDate(),
        month: new Date(date).getMonth() + 1,
        year: new Date(date).getFullYear(),
    }
    return `${objDate.day}.${objDate.month}.${objDate.year}`
}

const HistoryPage = () => {
    const [items, setItems] = React.useState<Map<string, IHistory[]>>(new Map())

    React.useEffect(() => {
      
        history.forEach((item) => {
            const key = createKey(item.createAt)

            setItems((prevItems) => {
                const newItems = new Map(prevItems)
                if (newItems.has(key)) {
                    const existingArray = newItems.get(key)
                    console.log(existingArray, item)
                    if (existingArray) {
                        existingArray.push(item)
                        newItems.set(key, existingArray)
                    }
                } else {
                    newItems.set(key, [item])
                }

                return newItems
            })
        })
    }, [history])

    return (
        <PageContainer withNavbar withMenu>
            <div className="w-full max-w-[710px] h-full mx-auto px-[10px] pt-[40px] animate-appearance pb-[40px]">
                {Array.from(items).map(([key, value]) => (
                    <div key={key}>
                        <DateSession date={key} />

                        {value.map((h) => (
                            <span key={h.historyID}>{h.word}</span>
                        ))}
                    </div>
                ))}
            </div>
        </PageContainer>
    )
}

export default HistoryPage
