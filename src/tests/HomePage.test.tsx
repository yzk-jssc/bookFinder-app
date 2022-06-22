import React from 'react';
import { render, screen } from '@testing-library/react';
import FinderItem from '../components/FinderItem';
import '@testing-library/jest-dom'

describe('HOME PAGE',()=>{
    test('should render input', () => {
        render(<FinderItem />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
      });
})
