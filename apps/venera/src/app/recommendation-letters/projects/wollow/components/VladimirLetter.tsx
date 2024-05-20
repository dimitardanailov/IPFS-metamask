'use client'

import {FC} from 'react'

import {PersonInfo} from '../../../components'

import source from '@/data/testimonials/images/wollow/vladimir'

const Letter: FC = () => {
  return (
    <>
      <PersonInfo
        name="Hristo Georgiev"
        source={source}
        title="Mobile Application Developer at Prime Holding JSC"
      />
      <div>
        <p>
          Dimitar is an excellent programmer and soul of the team. I am glad
          that I be given the opportunity to recommend it because I have a very
          positive impression of his personality. We spent over a year and a
          half working together in 158ltd.com. and in that time he managed to
          pass me a lot of knowledge in the IT field. Whenever I needed help or
          advice he has responded and helped me. I am sure Dimitar would be a
          great part of every team.
        </p>
      </div>
    </>
  )
}

export default Letter
