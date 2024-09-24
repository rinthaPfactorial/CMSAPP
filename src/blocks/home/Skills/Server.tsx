import { ParallaxText } from '@/blocks/ui'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import React, { cache } from 'react'
import type { Skill as SkillType } from '../../../payload-types'


const querySkills = cache(async () => {
    const payload = await getPayloadHMR({ config })
    const result = await payload.find({
        collection: 'skills',
    })
    return result.docs || []
})

export default async function SkillsServer() {
    const skills: SkillType[] = await querySkills()
    // console.log('====================================', skills);

    return (
        <section id="skills"  className=' '>
            <>
                {skills.map((skillGroup) => (
                    <div key={skillGroup.id}>
                        <ParallaxText baseVelocity={30}>
                            {skillGroup.skills
                                .sort((a, b) => a.order - b.order)
                                .map((skillItem, index) =>
                                (
                                    <span
                                        key={index}
                                        className="md:text-7xl text-xl font-semibold uppercase"
                                    >
                                        {skillItem.skill} •
                                    </span>
                                )
                                )}
                        </ParallaxText>
                    </div>
                ))}
            </>
            {/* <h1>Skills List</h1>
            {skills.map((skillGroup) => (
                <div key={skillGroup.id}>
                    <h2>Skill Group ID: {skillGroup.id}</h2>
                    <ul>
                        {skillGroup.skills.map((skillItem, index) => (
                            <li key={index}>
                                <strong>Skill:</strong> {skillItem.skill}, <strong>Order:</strong> {skillItem.order}
                            </li>
                        ))}
                    </ul>
                    <p>Created At: {new Date(skillGroup.createdAt).toLocaleString()}</p>
                    <p>Updated At: {new Date(skillGroup.updatedAt).toLocaleString()}</p>
                </div>
            ))} */}
        </section>
    )
}
