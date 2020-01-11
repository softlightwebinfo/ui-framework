import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {Button} from './Button'

test('Renders', async () => {
    const {getByRole} = render(<Button/>);
    expect(getByRole('heading')).toHaveTextContent('My First Component')
});
