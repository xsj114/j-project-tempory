interface Is {
    [key: string]: (arg?: unknown, ...rest: unknown[]) => boolean;
}
declare const is: Is;
export default is;
