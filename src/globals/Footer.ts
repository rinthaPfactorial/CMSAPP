import { tree } from "next/dist/build/templates/app-page"
import { GlobalConfig } from "payload"
export const Footer: GlobalConfig={
slug:'footer',
fields:[
    {
        name:'logo',
        label:'logo',
        type:'upload',
        relationTo:'media',
        required:true
    },
    {
        name:'nav',
        label:'Navigation',
        type:'array',
        fields:[
            {name:'label',
                label:'Label',
                type:'text'
            },
            {name:'link',
                label:'Link',
                type:'text'
            }
        ],
        minRows:1,
        maxRows:5,
    },
    {
        name:'copyrightNotice',
        label:'Copyright Notice',
        type:'text',
        required:true
    }
   
]
}