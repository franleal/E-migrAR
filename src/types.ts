import { ButtonHTMLAttributes, ReactNode } from "react"

export type User = {
    name:string
    id:string
    email:string
    password:string
    active:boolean
}

export type PaymentStatus = "pending" | "approved" | "rejected"

export type ButtonType = {label: string} & ButtonHTMLAttributes<HTMLButtonElement>


export type SliderType = { 
    title: string;
    subtitle: string;
    buttons?: { label: string; href?: string }[];
    children?: ReactNode; 
}