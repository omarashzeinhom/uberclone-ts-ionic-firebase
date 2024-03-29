import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRefresherContent,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./ConfirmTab.scss";
import Map from "../../components/Map/Map";
import { useEffect, useState } from "react";
//
//import { useRouter } from "../../utilities/useRouter/useRouter";
import WorkerSelector from "../../components/WorkerSelector/WorkerSelector";

interface MapsProps {
  name: string;
  pickupCoordinates: number[];
  dropOffCoordinates: number[];
}

const ConfirmTab: React.FC<MapsProps> = () => {
  //Defined router from utils
  //const router = useRouter();
  // used query here as a string with window & @@params
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  // Get the drop off and pickup
  const dropoff = urlParams.get("dropoff");
  const pickUp = urlParams.get("pickup");
  // Debug the drop off and
  //console.log("PickUp:", pickUp);
  //console.log("DropOff:", dropoff);

  //debug router
  //console.log(router);

  //debug props
  //console.log(props);

  const [pickupCoordinates, setPickupCoordinates] = useState([0,0]);
  const [dropOffCoordinates, setDropOffCoordinates] = useState([0,0]);

  //get PickupCoordinates Start
  const getPickUpCoordinates = () => {
    // Fetch Function

    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoib21hcmFzaHplaW5ob205OCIsImEiOiJjbDRrMXY5c3MwN3ZpM2NxcHp3ZGVmN3ZyIn0.3Ziuh7Utama_wz_4s8qh2g",
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };
  //get PickupCoordinates end

  // get DropOffCoordinates Start
  const getDropOffCoordinates = () => {
    // Fetch Function
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoib21hcmFzaHplaW5ob205OCIsImEiOiJjbDRrMXY5c3MwN3ZpM2NxcHp3ZGVmN3ZyIn0.3Ziuh7Utama_wz_4s8qh2g",
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropOffCoordinates(data.features[0].center);
      });
  };
  //debug useState
  //console.log(pickupCoordinates, dropOffCoordinates);
  //call functions with useEffect

  useEffect(() => {
    getPickUpCoordinates();
    getDropOffCoordinates();
    //console.log(pickUp, dropoff);
  /**
   *   return () => {
      <IonRefresherContent></IonRefresherContent>;
    };
   */
  }, [pickUp, dropoff]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Confirm</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/search" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent
        fullscreen

      >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Confirm</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Map
          name={"map"}
          dropOffCoordinates={dropOffCoordinates}
          pickupCoordinates={pickupCoordinates}
        />

        <IonGrid>
          {/**Worker Selector */}
          <IonText>
            <h2>Confirm Worker</h2>
          </IonText>
          <WorkerSelector 
          dropOffCoordinates={dropOffCoordinates}
          pickupCoordinates={pickupCoordinates}
          />
          {/**Confirm Button */}
          <IonButton expand="block" color={"success"}>
            Confirm Worker Reservation
          </IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ConfirmTab;
