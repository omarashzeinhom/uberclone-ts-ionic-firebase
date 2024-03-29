import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRouterLink,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
//Scss
import "./HomeTab.scss";
//Components
import Map from "../../components/Map/Map";
//Custom function useRouter like next js
import { useRouter } from "../../utilities/useRouter/useRouter";

//React
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

//FireBase
import { onAuthStateChanged, signOut, User } from "firebase/auth";
//FireBase File in root folder
import { auth } from "../../Firebase";

interface MapsProps {
  pickupCoordinates: number[];
  dropOffCoordinates: number[];
  username: string;
  password: string;
  prevState: null;
  name: string;
}

const HomeTab: React.FC<MapsProps> = () => {
  const [user, setUser] = useState<any | null>(null);

  console.log(user);
  console.log(setUser);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user != null) {
        //history.push('/');
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setUser(null);
        //history.push("/login");
      }
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Map
          name={"map"}
          dropOffCoordinates={[31.239661, 30.056156]}
          pickupCoordinates={[31.239661, 30.056156]}
        />
        {/**Header */}

        <IonGrid>
          <IonRow>
            <IonCol size="4">
              <IonRouterLink href="/tabs/search">
                <IonCard color={"light"}>
                  <IonCardContent>
                    <IonCardSubtitle class="ion-text-center">
                      Worker
                    </IonCardSubtitle>
                    <IonAvatar slot="end">
                      {/**{user && user.phototUrl} */}
                      <IonImg
                        src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655585748/FIXITAPP/nextjs-app-images/ActionButtonImages/woker-avatar-male_mieyjc.svg"
                        onClick={() => signOut(auth)}
                      />
                    </IonAvatar>
                  </IonCardContent>
                </IonCard>
              </IonRouterLink>
            </IonCol>

            <IonCol size="4">
              <IonRouterLink href="/tabs/search">
                <IonCard color={"light"}>
                  <IonCardContent>
                    <IonCardSubtitle class="ion-text-center">
                      Profession
                    </IonCardSubtitle>
                    <IonAvatar>
                      <IonImg src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655585697/FIXITAPP/nextjs-app-images/ActionButtonImages/worker-tool-search_au8m9f.svg" />
                    </IonAvatar>
                  </IonCardContent>
                </IonCard>
              </IonRouterLink>
            </IonCol>
            <IonCol size="4">
              <IonRouterLink href="/tabs/search">
                <IonCard color={"light"}>
                  <IonCardContent>
                    <IonCardSubtitle class="ion-text-center">
                      Reserve
                    </IonCardSubtitle>
                    <IonAvatar class="ion-text-center">
                      <IonImg src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655623254/FIXITAPP/nextjs-app-images/ActionButtonImages/clock-svgrepo-com_b913bl.svg" />
                    </IonAvatar>
                  </IonCardContent>
                </IonCard>
              </IonRouterLink>
            </IonCol>

            <IonCol>
              <IonRouterLink href="/tabs/search">
                <IonButton href="/tabs/search" expand="full" color={"dark"}>
                  Where to?
                </IonButton>
              </IonRouterLink>
            </IonCol>
          </IonRow>
        </IonGrid>
        {/**Action Btns */}

        {/**input btn */}

        <IonGrid size-sm>
          <IonRow>
            <IonCol size="6">
              <IonCard color={"light"}>
                <IonCardContent>
                  <IonImg
                    src={
                      "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655577547/FIXITAPP/ionic-app-images/header/fix__it__header__logo_t8mpen.svg"
                    }
                    className="fixit__header__logo"
                    slot="start"
                  />
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard color={"light"}>
                <IonCardContent>
                  <IonCardSubtitle class="ion-text-center">
                    {user && user.name}
                  </IonCardSubtitle>

                  <IonAvatar>
                    <IonImg
                      src={user && user.phototUrl}
                      className="fixit__header__avatar"
                    />
                  </IonAvatar>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default HomeTab;
