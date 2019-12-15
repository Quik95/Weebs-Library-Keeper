import React from 'react'

import AiringBadge from './AiringBadge'

describe('Renders AiringBadge', () => {
  const wrapper = shallow(<AiringBadge airingIn={12414}><div></div></AiringBadge>)

  it('Renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

})