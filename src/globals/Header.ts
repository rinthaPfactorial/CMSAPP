import { GlobalConfig } from "payload"
export const Header: GlobalConfig={
slug:'header',
fields:[
    // {
    //     name:'logo',
    //     label:'logo',
    //     type:'upload',
    //     relationTo:'media',required:true
    // },
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
        maxRows:6,
        required:true,
    }
   
]
}