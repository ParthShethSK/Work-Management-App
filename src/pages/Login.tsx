import { IonContent, IonHeader,useIonViewDidEnter, IonPage, IonTitle, IonToolbar, IonText, IonList, IonLabel, IonItem, IonInput, IonNavLink, IonButton, IonItemDivider } from '@ionic/react';
import './Tab1.css';
import Register from './Register';
import { useState, useContext, useEffect } from "react";
import { AuthContext } from '../context/auth-context';
import { useIonRouter } from '@ionic/react';
import { authUser } from '../appwrite.config.js';

const validateEmail = (email: String) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Tab1 = () => {

  useIonViewDidEnter(() => {
    if(localStorage.getItem("myConsiliumCookie"))
      router.push("/dashboard")
  });

  const [success, setSuccess] = useState();
  const authContext = useContext(AuthContext);
  const router = useIonRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    if (validateEmail(email))
      try {
        const user = {
          email: email,
          password: password
        }
        const res = await authUser(user);
        await authContext.setAuthState(res);
        //await setSuccess(true);
        setTimeout(() => {
          router.push("/dashboard");
          alert("Success");
        }, 2000);
      } catch (err: any) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        //err.message === "Invalid credentials" ? setSuccess(false) : null;
      }
    else {
      //setSuccess("Invalid Email");
      console.log("Email is invalid")
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form onSubmit={handleSubmit} >
          <IonList lines="full" className="ion-no-margin">
            <IonItem>
              <IonLabel>E-mail Address</IonLabel>
              <IonInput placeholder="example@example.com" name="email" type="email" required={true}
                ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Password</IonLabel>
              <IonInput placeholder="********" name="password" type="password" required={true}
                ></IonInput>
            </IonItem>
            <IonItem lines="none">
            <a href="https://github.com/" style={{textDecoration:"none"}}>
              Forgot password
            </a>
            </IonItem>
            <IonButton className="ion-margin-top" expand="block" type="submit">
              Login
            </IonButton>
            <IonItemDivider/>
            <IonText color="" className="ion-margin-all">
                <p>New User?</p>
              </IonText>
            <IonNavLink routerDirection="forward" component={() => <Register />}>
              <IonButton>Register</IonButton>
            </IonNavLink>
          </IonList>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
