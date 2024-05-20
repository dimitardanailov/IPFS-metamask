'use client'

import Position from '@/types/Position'

import ExperiencePosition from '@/components/ExperiencePosition'
import TargetBlankLink from '@/components/TargetBlankLink'
import PositionLink from '@/components/PositionLink'

import positions from '@/app/positions/db'

import {listStyle} from '../shared'

const conttainerClassName = 'mx-2'

const Siemens = () => {
  return (
    <>
      <PositionLink
        sufix="blockchain-architect-siemens-energy"
        position="Blockchain Architect"
      />
      ,{' '}
      <TargetBlankLink
        text="Siemens Energy"
        title="Blockchain Architect"
        href="https://www.siemens-energy.com/global/en/home.html"
      />
      : March - June (2023) (Team size: 15+);
    </>
  )
}

const Roles = () => {
  const roles = Array.from(positions.values())

  return roles.map((position: Position, index: number) => {
    return (
      <li key={index}>
        <ExperiencePosition position={position} />
      </li>
    )
  })
}

const Contractor = () => {
  return (
    <div className={conttainerClassName}>
      <section>Remote B2B Contractor (2018 - present)</section>
      <ul className={listStyle}>
        <Roles />
        <li>
          <PositionLink
            sufix="blockchain-staff-engineer-propine"
            position="BlockChain Staff Engineer"
          />
          ,{' '}
          <TargetBlankLink
            text="Propine.com"
            title="BlockChain Staff Engineer at Propine.com"
            href="https://www.propine.com"
          />
          : Sep, 2021 - August, 2022; (Team size: 20+);
        </li>
        <li>
          Software Engineering Manager,{' '}
          <TargetBlankLink
            text="Elephant stocks"
            title="Software Engineering Manager at Elephant stocks"
            href="https://www.elephantstock.com/"
          />
          : Sep, 2020 - June, 2021; (Team size: 20+);
        </li>
        <li>
          Software Architect,{' '}
          <TargetBlankLink
            text="Getcraft.com"
            title="Software Architect at Elephant stocks"
            href="https://www.getcraft.com"
          />
          : July, 2019 - June, 2020; (Team size: 20+)
        </li>
      </ul>
    </div>
  )
}

const OnSite = () => {
  return (
    <div className={conttainerClassName}>
      <section>On site employment: 2010 - 2018</section>
      <ul className={listStyle}>
        <li>Technical Architect, LiveArea: 2017 - 2018; (Team size: 10+);</li>
        <li>
          Full Stack Software Architect, Mentormate: 2015 - 2017; (Team size:
          100+);
        </li>
        <li>
          Wollow Soft:
          <ul className={listStyle}>
            <li>CTO, Woollow Soft: 2014 - 2015; (Team size: 30+);</li>
            <li>Developer and Team Leader: 2010 - 2014; (Team size: 20+);</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

const Experience = () => {
  return (
    <>
      <div className="font-bold">Experience</div>
      <Contractor />
      <OnSite />
    </>
  )
}

export default Experience
