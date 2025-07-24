export interface IArticle {
    id: number
    title: string
    text: string
    created_at: string

}

export interface IArticleList {
    count: number
    pages: number
    results: IArticle[]
}

export interface IArticleDetail extends IArticle {}

export interface IArticleParams {
    page: string
    search: string
}