import { IWord } from "./IWord"

export interface IQuiz {
    quizId: number
    name?: string
    translation?: string
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
