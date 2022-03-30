import { faCalendarDays, faEnvelope, faEnvelopeOpenText, faLocationDot, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddressData = [
  {
    id: 1,
    name: "Address",
    value: "11 Allée du grand chariot, 95490 Vauréal",
    icon: <FontAwesomeIcon icon={faLocationDot} style={{color:"#38bdf8"}} size="3x" transform="down-2 grow-1"/>,
  },
  {
    id: 2,
    name: "Téléphone",
    value: "+ (33) 788 587 521",
    icon: <FontAwesomeIcon icon={faMobileScreenButton} style={{color:"#38bdf8"}} size="3x" transform="down-2 grow-1"/>,
  },
  {
    id: 3,
    name: "Email",
    value: "sahana@gmail.com",
    icon: <FontAwesomeIcon icon={faEnvelope} style={{color:"#38bdf8"}} size="3x" transform="down-2 grow-1"/>,
  },
  {
    id: 4,
    name: "Jours/Heures de travail",
    value: "Lun - Dim / 9h - 20h",
    icon: <FontAwesomeIcon icon={faCalendarDays} style={{color:"#38bdf8"}} size="3x" transform="down-2 grow-1"/>,
  },
];
