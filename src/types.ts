import { ButtonHTMLAttributes } from "react"

export type User = {
    name:string
    id:string
    email:string
    password:string
    active:boolean
}

export type PaymentStatus = "pending" | "approved" | "rejected"

export type ButtonType = {label: string} & ButtonHTMLAttributes<HTMLButtonElement>
