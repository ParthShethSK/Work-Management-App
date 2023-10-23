import { IonContent, useIonViewDidEnter, useIonRouter, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonInput, IonNavLink, IonButton, IonItemDivider,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonListHeader,IonMenu,IonMenuButton,IonButtons,IonAvatar  } from '@ionic/react';
import { getCurrentUser, verifyCurrentUser } from "../appwrite.config"
import Dashboard from './Dashboard';
import './main.css';



const Profile: React.FC = () => {

    const router = useIonRouter();

    useIonViewDidEnter(async() => {

        try {
            const user = await getCurrentUser();
            const token = localStorage.getItem("myConsiliumCookie");
            await verifyCurrentUser(token);
        }
        catch(err) {
            alert('Login first to view the profile')
            router.push('/login')
        }

      });

  return (
    <><></><IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar color="tertiary" >
          <IonTitle>Menu Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonNavLink routerDirection="forward" component={() => <Dashboard />}>
              <IonButton>Dashboard</IonButton>
            </IonNavLink>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Profile</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonItem>
        <IonAvatar>
        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" width="150000" height="160000"/>
        </IonAvatar>
        </IonItem>
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>User Name</IonCardTitle>
        <IonCardSubtitle>UserID</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Here's a small text description for the user.
      </IonCardContent>
    </IonCard>
        </IonContent>
      </IonPage></>
  );
};

export default Profile;