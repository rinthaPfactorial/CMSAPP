import { Fragment } from "react"
import { Page } from "@/payload-types"


const blockComponents={
    
}

export const RenderBlocks: React.FC<{
    blocks: Page['layout'][0][]
}> = (props) => {
    const { blocks } = props
    const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0
    if (hasBlocks) {
        return (
            <Fragment>
                {blocks.map((block, index) => {
                    const { blockName, blockType } = block
                    if (blockType && blockType in blockComponents) {
                        const Block = blockComponents[blockType]
                        if (Block) {
                            return (
                                <div key={index}>
                                    <Block id={blockName} {...block} />
                                </div>
                            )
                        }
                    }

                })}
            </Fragment>
        )
    }
}