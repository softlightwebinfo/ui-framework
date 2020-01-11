import { configure } from '@storybook/react'
import requireContext from 'require-context.macro'

const req = requireContext('../src/stories', true, /\.stories\.tsx$/)

function loadStories () {
  req.keys().forEach(req)
}

configure(loadStories, module)
