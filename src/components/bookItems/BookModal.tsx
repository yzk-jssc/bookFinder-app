import React, { FunctionComponent, useContext } from 'react'
import { BookItemContext } from '../../context/context'

interface BookModalProps {
    
}
 
const BookModal: FunctionComponent<BookModalProps> = () => {
    const {bookModalId,bookModalInfo} = useContext(BookItemContext)
    return (
        <div className='_book_modal'>
            {bookModalId && bookModalInfo !== undefined &&
                
                <div className='modal__info'>
                    
                    <div className='modal__about'>
                        {
                        bookModalInfo.volumeInfo.imageLinks?.thumbnail
                        ?<img className='modal__image' src={bookModalInfo.volumeInfo.imageLinks?.thumbnail} alt="" />
                        :<img className='modal__image' style={{width:200}} src="images/bookPlaceholder.png" alt="imagePlaceholder" />
                        }
                        
                    </div>
                    
                    <div className='modal__content'>
                        <div className='content__text content__text__title'>{bookModalInfo.volumeInfo.title}</div>
                        <div className='content__text content__text__undertitle'>{bookModalInfo.volumeInfo?.subtitle}</div>
                        <div className='content__text content__text__undertitle'>{bookModalInfo.volumeInfo?.descriptions}</div>
                        <div className='modal__underImage'>{'authors: '+(`${bookModalInfo.volumeInfo.authors }`|| 'NONE')}</div>
                        <div className='modal__underImage'>{'date: '+(bookModalInfo.volumeInfo.publishedDate || 'NONE')}</div>
                        <div className='modal__underImage'>{ 'pages: '+(bookModalInfo.volumeInfo.pageCount || "unspecified")}</div>
                        <div className='modal__button'>
                            <a className='modal__link' href={bookModalInfo.volumeInfo.previewLink} target = '_blank'  rel='noreferrer'>Read this book</a>
                        </div>
                    </div>
                    
                </div>
                
            }
        </div>
    );
}
 
export default BookModal;
