import React, { useState }from 'react'
import { Header, Button, Container } from '@sberdevices/plasma-ui';
import { IconHelp } from '@sberdevices/plasma-icons';
import { Modal } from './Modal'


export const Head = () => {
  
    const [modal, setModal] = useState({ modal1 : false });
    

  
    return (
    <Header title = "Финансовый трекер" logo = "./images/logo.png" logoAlt = "Logo">
        <Button text="Помощь" 
                contentRight={<IconHelp size="xs"/>}
                onClick = {() => setModal({
                    ...modal, modal1: true
                })} 
        />
        <Modal 
            title={'Помощь'}
            isOpened={modal.modal1}
            onModalClose={() => setModal({
                ...modal, modal1: false
            })}           
        />
    </Header>
  )
}