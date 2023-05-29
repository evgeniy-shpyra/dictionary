export interface IQuiz {
    quizId: number
    name?: string
    translation?: string
}

export interface ICreateQuizRequest {
    wordsId: number[]
}

export interface IVerifyQuizRequest {
    body: {
        name?: string
        translation?: string
    },
    quizId: number;
}
