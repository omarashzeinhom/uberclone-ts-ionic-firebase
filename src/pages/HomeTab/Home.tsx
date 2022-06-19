import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonInput,
  IonItemDivider,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.scss";
import Map from "../../components/Map/Map";
import { IonReactRouter } from "@ionic/react-router";
import Search from "../Search/Search";
import { Route } from "react-router";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Map name="Map" />
        {/**Header */}

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={
                  "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655577547/FIXITAPP/ionic-app-images/header/fix__it__header__logo_t8mpen.svg"
                }
                className="fixit__header__logo"
              />
            </IonCol>
            <IonCol>
              <IonText>
                <h4>Omar AbdElRahman</h4>
              </IonText>

              <IonAvatar security="" slot="">
                <IonImg
                  src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641529/personal_portofolio_assets_2022/pp_home_removedbg_g5eq7r.webp"
                  className="fixit__header__avatar"
                />
              </IonAvatar>
            </IonCol>
          </IonRow>
        </IonGrid>
    
        <IonButtons slot="">
          <IonGrid>
            <IonRow>
              <IonCol>
              <IonRouterOutlet>
              <Route exact={true} path="/tabs/search" component={Search}/>

              </IonRouterOutlet>

              <IonAvatar>
                  <IonImg  src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655585748/FIXITAPP/nextjs-app-images/ActionButtonImages/woker-avatar-male_mieyjc.svg" />
                </IonAvatar>
               
                <IonButton color={"success"}>
                  <IonText>
                    <h5>Worker</h5>
                  </IonText>
                </IonButton>
              </IonCol>
        
              <IonCol>
                <IonAvatar>
                  <IonImg src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655585697/FIXITAPP/nextjs-app-images/ActionButtonImages/worker-tool-search_au8m9f.svg" />
                </IonAvatar>
                <IonButton color={"secondary"}>
                  <IonText>
                    <h5>Profession</h5>
                  </IonText>
                </IonButton>
              </IonCol>

              <IonCol>
                <IonAvatar>
                  <IonImg src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655623254/FIXITAPP/nextjs-app-images/ActionButtonImages/clock-svgrepo-com_b913bl.svg" />
                </IonAvatar>
                <IonButton color={"secondary"}>
                  <IonText>
                    <h5>Reserve</h5>
                  </IonText>
                </IonButton>
              </IonCol>
              <IonItemDivider />
              <IonCol>
                <IonInput placeholder="Whereto?" />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonButtons>
        {/**Action Btns */}

        {/**input btn */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
