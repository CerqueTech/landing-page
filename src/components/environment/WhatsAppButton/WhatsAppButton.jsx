import { FloatingWhatsApp } from 'react-floating-whatsapp';
import getData from '../../../services/data.ts';
import { useState, useEffect } from 'react';
export default function WhatsAppButton(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(`${props.lang}/enviroment/whatsapp`);
      setData(result);
    };

    fetchData();
  }, []);
  return (
    <FloatingWhatsApp
      phoneNumber="+541140541120"
      accountName="Mateo Cerquetella"
      chatMessage={data.menssage}
      statusMessage={data.status}
      placeholder={data.placeholder}
      avatar="/assets/images/whatsapp/icon.jpeg"
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
