import { IWord } from "./IWord"

export interface IQuiz {
    quizId: number
    name?: string
    translation?: string
}

export interface IGetQuizResponse {
    quizId?: number
    name?: string
    translation?: string
    results?: {
        word: string, 
        expected: string,
        answer: string,
        status: boolean
    }[]
}

export interface ICreateQuizRequest {
    words: IWord[]
}

export interface ICreateQuizResponse {
    quizId: number
}

export interface IVerifyQuizRequest {
    body: {
        name?: string
        translation?: string
    },
    quizId: number;
}
