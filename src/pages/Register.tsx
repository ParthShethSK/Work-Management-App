import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonInput, IonNavLink, IonButton, IonItemDivider } from '@ionic/react';
import Tab1 from "./Login"

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList lines="full" className="ion-no-margin">
          <IonItem>
            <IonLabel>E-mail Address</IonLabel>
            <IonInput placeholder="example@example.com"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Password</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonButton className="ion-margin-top" type="submit" expand="block">
            Register
          </IonButton>
          <IonItemDivider/>
          <IonNavLink routerDirection="forward" component={() => <Tab1 />}>
            <IonButton>Go to login</IonButton>
          </IonNavLink>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Register;
