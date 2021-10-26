import React from 'react'
interface AjaxSuccess<T> {
    status: number
    result: T
}

interface AjaxError<T> {
    status: number
    message: string
}

export interface LoginDataType {
    mobile: string
    password: string
};

export interface RegisterDataType extends LoginDataType{
    email: string
}

export interface LoginComponentProps {
    axios: AjaxFnKeyType
}

export interface RegisterComponentProps {
    axios: AjaxFnKeyType
}


export interface BasisComponentProps {
    className: string,
    remove: () => void,
    field: Field, 
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleForwardClick: () => void
}


export interface Field {
    fieldName: string
    fieldType: string
    fieldValue: string
    fieldNumber: string
}

export type VoidFuncType = () => void;

export type AjaxFnKeyType = {
    [key: string]: (...parame: any[]) => AjaxSuccess<unknown>
}

export type ExtendFn = (dest: AjaxFnKeyType, ...sources: any[]) => AjaxFnKeyType

