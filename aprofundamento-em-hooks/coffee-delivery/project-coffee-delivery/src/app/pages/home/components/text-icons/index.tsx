    import { ReactNode } from "react"

    interface TextIconProps {
        icon: ReactNode;
        content: string;
        color: "yellow" | "yellow-dark" | "base-text" | "purple";
    }

    export function TextIcon({ icon, content, color }: TextIconProps){
        return(
            <div className="flex items-center gap-3">
                <div 
                className={`flex items-center justify-center p-[10px] rounded-full text-white
                ${color === "yellow" && "bg-yellow"} 
                ${color === "yellow-dark" && "bg-yellow_dark"}
                ${color === "base-text" && "bg-base_text"}
                ${color === "purple" && "bg-purple" }`}
                >
                {icon}
                </div>

                <p className="text-base_text">{content}</p>
            </div>
        )
    }