import React, { Dispatch, FunctionComponent, ReactChild,  ReactNode, SetStateAction } from 'react'

interface MyModalProps {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    children?: ReactNode | ReactChild 
}
 
const MyModal: FunctionComponent<MyModalProps> = ({visible,setVisible,children, ...rest}) => {


    return (
        <div className={visible ? 'myModal active' : 'myModal' } onClick={()=>setVisible(false)}>
            <div className={visible ? 'myModalContent active' : 'myModalContent'} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
            
        </div>
    );
}
 
export default MyModal;

