import React, { useState }from 'react'
import { Header, Button, Container } from '@sberdevices/plasma-ui';
import { IconHelp } from '@sberdevices/plasma-icons';

export const Head = () => {
  return (
    <Header title = "Финансовый трекер" logo = "./images/logo.png" logoAlt = "Logo">
        <Button text="Помощь" contentRight={<IconHelp size="xs"/>}/>
    </Header>
  )
}