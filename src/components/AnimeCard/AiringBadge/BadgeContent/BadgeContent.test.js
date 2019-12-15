import React from 'react'

import BadgeContent from './BadgeContent'

describe('Renders BadgeContent', () => {
  const wrapper = shallow(<BadgeContent absTime="15/12/2019 18:25" relTime="9h" />)

  it("Renders correctly", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
