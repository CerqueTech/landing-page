import { FloatingWhatsApp } from "react-floating-whatsapp";
import { getCollection, getEntry } from "astro:content";
import { getLangFromUrl, useTranslations } from "../../../i18n/utils.ts";
import getData from "../../../services/data.ts";
const data = await getData("es/enviroment/whatsapp");
export default function WhatsAppButton(props) {
  const lang = getLangFromUrl(props.lang);
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
