import { IonContent, useIonViewDidEnter, useIonRouter, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonInput, IonNavLink, IonButton, IonItemDivider,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonListHeader,IonMenu,IonMenuButton,IonButtons  } from '@ionic/react';
import { getCurrentUser, verifyCurrentUser } from "../appwrite.config"

import Tab1 from './Login';
import './main.css';
import Profile from './Profile';
import WeeklyReport from './WeeklyReport';


const Dashboard: React.FC = () => {

    const router = useIonRouter();

    useIonViewDidEnter(async() => {

        try {
            const user = await getCurrentUser();
            const token = localStorage.getItem("myConsiliumCookie");
            await verifyCurrentUser(token);
        }
        catch(err) {
            alert('Login first to view the dashboard')
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
            <IonNavLink routerDirection="forward" component={() => <Profile />}>
              <IonButton color="success">Profile</IonButton>
            </IonNavLink>
          </IonItem>
          <IonItem>
            <IonNavLink routerDirection="forward" component={() => <WeeklyReport />}>
              <IonButton color="warning">My Tasks</IonButton>
            </IonNavLink>
          </IonItem>
          <IonItem>
            <IonNavLink routerDirection="forward" component={() => <WeeklyReport />}>
              <IonButton color="danger">Insights</IonButton>
            </IonNavLink>
          </IonItem>
          <IonItem>
            <IonNavLink routerDirection="forward" component={() => <WeeklyReport />}>
              <IonButton color="dark">Weekly Report</IonButton>
            </IonNavLink>
          </IonItem>
          <IonItem>
            <IonNavLink routerDirection="forward" component={() => <Tab1 />}>
              <IonButton>Logout</IonButton>
            </IonNavLink>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Dashboard</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonList lines="full" className="ion-no-margin">
            <IonItem>
              <IonLabel>Welcome to MyConsilium</IonLabel>
            </IonItem>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Your Daily Tasks</IonCardTitle>
                <IonCardSubtitle>One task at a time</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                <IonListHeader color="danger">
                  <IonLabel>Immediate</IonLabel>
                </IonListHeader>
                <IonItem>
                  <IonLabel>1. Write OS lab manual</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>2. Prepare for OS lab internals</IonLabel>
                </IonItem>
                <IonListHeader color="warning">
                  <IonLabel>Intermediate</IonLabel>
                </IonListHeader>
                <IonItem>
                  <IonLabel>1. Complete DAA project</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>2. Prepare for OS lab internals</IonLabel>
                </IonItem>
                <IonListHeader color="success">
                  <IonLabel>Later</IonLabel>
                </IonListHeader>
                <IonItem>
                  <IonLabel>1. Complete OS project</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>2. Submit ML code assignment</IonLabel>
                </IonItem>
              </IonCardContent>
            </IonCard>
            <IonButton className="ion-margin-top" type="submit" expand="block">
              Proceed
            </IonButton>
          </IonList>
        </IonContent>
      </IonPage></>
  );
};

export default Dashboard;
