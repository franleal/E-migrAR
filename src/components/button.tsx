import type { ButtonType } from "@/types";

export default function Button({label,type = "button", ...rest}:ButtonType){
    return(
        <button type={type} {...rest}>{label}</button>
    )

}