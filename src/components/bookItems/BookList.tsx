import React, { FunctionComponent, useContext } from 'react'
import { BookItemContext } from '../../context/context';

interface BookListProps {
    func: (id:string) => void
}
 
const BookList: FunctionComponent<BookListProps> = ({func}) => {

    const {bookList,loading} = useContext(BookItemContext)
    
    
    return (
        <div className='book__content'>
            {bookList.length>0
            ?( <div className='book__list'>
                { bookList.map(book=>
            
            <div data-testid='book-item' className="book__item" key={book.id} onClick={()=>{
                func(book.id)
                
            }}>
                
                <div className='book__item__image'>
                    {book.volumeInfo.imageLinks?.thumbnail !== undefined
                    ? <img className='list__image' src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
                    : <img className='list__image' style={{width:200}} src="images/bookPlaceholder.png" alt="imagePlaceholder" /> }
                </div>
                <div className='book__about'>
                    <span className='book__about__title'>{book.volumeInfo.title}</span> <br /> <span className='book__about__date'>{'date: '+( book.volumeInfo.publishedDate || 'unspecified ')}</span>
                </div>                    
                
            </div>
        )}
            </div> )
            : <div className='find__placeholder'>
                {loading
                ?<h1 className='placeholder__title'>Loading..</h1>
                : <h1 className='placeholder__title'>There is nothing to show</h1>
            }
            </div>   
        }
        </div>
    );
}
 
export default BookList;
