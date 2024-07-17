import React from 'react'
import Box from './box'
import HeadingText from './heading-text'

const Header = () => {
  return (
    <header className='py-6'>
        <Box>
            <HeadingText
            title={'TaskPro'}
            description={'Ranked number one website to manage your personal task'}
            />
        </Box>
    </header>
  )
}

export default Header