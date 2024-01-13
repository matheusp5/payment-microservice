
export interface UseCase<T> {
    execute(...props: any): Promise<T>
}