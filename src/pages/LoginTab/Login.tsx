import {
  IonButton,
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
import React, { useEffect } from "react";
import "./Login.scss";
//Custom use router
import { useRouter } from "../../utilities/useRouter/useRouter";
//Sign with popup imported directly from firebase auth
import { signInWithPopup, onAuthStateChanged, getAuth } from "firebase/auth";
//from Firebase.tsx file in root folder
import { auth, provider } from "../../Firebase";
import { useHistory } from "react-router";
//

const Login = () => {
  const history = useHistory();
  console.log(history);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        history.push("/");
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      }
    });
  });

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle size={"large"}>Login</IonTitle>
          </IonToolbar>

          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <IonImg
                  className="login__icon"
                  src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655577547/FIXITAPP/ionic-app-images/header/fix__it__header__logo_t8mpen.svg"
                />
              </IonCol>
              <IonCol size="12">
                <IonImg
                  src={
                    "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1656174907/FIXITAPP/ionic-app-images/Login%20and%20get%20started/undraw_under_construction_-46-pa_1_zkz0vc.svg"
                  }
                  class="login__svg"
                />
              </IonCol>

              <IonButton
                color={"success"}
                expand={"block"}
                onClick={() => signInWithPopup(auth, provider)}
              >
                Sign in with Google
              </IonButton>

              <IonCol size="6">
                <IonRouterLink href="/forgotpassword">
                  Forgot Password ?
                </IonRouterLink>
              </IonCol>
              <IonCol size="6">
                <IonRouterLink href="/register">Register account</IonRouterLink>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Login;


function setUser(arg0: { name: string | null; photoUrl: string | null }) {
  throw new Error("Function not implemented.");
}
