import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import React from 'react'

interface ResponseItem {
    content: string,
}


const ResponseSection: React.FC<ResponseItem> = ({ content }) => {
    return (
        <ScrollArea className="w-[720px] h-[128px] bg-[#F5F5F5] rounded-md border overflow-auto">
           <pre className="whitespace-pre-wrap">{content}</pre> 
        </ScrollArea>
    )
}

export default ResponseSection