import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsAppButton() {
  return (
      <FloatingWhatsApp
        phoneNumber="+541140541120"
        accountName="Mateo Cerquetella"
        chatMessage='¡Hola! ¿Cómo puedo ayudarte?'
        statusMessage='Normalmente responde en 1 hora'
        placeholder= 'Ingresa tu mensaje...'
        avatar="assets/images/whatsapp/icon.jpeg"
        messageDelay={1.5}
        chatboxHeight={400}
        allowEsc
        allowClickAway
        notification
        notificationDelay={20}
        notificationSound
      />
  );
}
