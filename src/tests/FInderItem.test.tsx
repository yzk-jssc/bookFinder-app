import '@testing-library/jest-dom'
import { render,screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axiosInstance } from '../api/fetchBooks'
import FinderItem from '../components/FinderItem'
import { BookItem } from '../types/types'

describe('list test', ()=>{
    
    test('should be load booklist after typing in input',async()=>{
        render(<FinderItem/>)
        userEvent.type(screen.getByRole('textbox'),'smth')
        await waitFor(()=>{
            return expect(
                axiosInstance.get<BookItem>('smth')
                ).resolves.toBeDefined()
            })

    })

   
})
