export interface IDictionary {
    id: number
    createdAt: string
    name: string
    userId: number
    total: number
}

export interface ICreateDictionaryWithWordsRequest {
    dictionaryName: string
    isPublic: boolean
    words: Array<{ name: string; translation: string }>
}

export type IGetAllPublicDictionariesResponse = {
    dictionaries: IDictionary[]
}
