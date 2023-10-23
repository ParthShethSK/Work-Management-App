import { IonContent, useIonViewDidEnter, useIonRouter, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonInput, IonNavLink, IonButton, IonItemDivider,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonListHeader,IonMenu,IonMenuButton,IonButtons, IonTextarea  } from '@ionic/react';
import { getCurrentUser, verifyCurrentUser } from "../appwrite.config"
import Dashboard from './Dashboard';




const WeeklyReport: React.FC = () => {

    const router = useIonRouter();

    useIonViewDidEnter(async() => {

        try {
            const user = await getCurrentUser();
            const token = localStorage.getItem("myConsiliumCookie");
            await verifyCurrentUser(token);
        }
        catch(err) {
            alert('Login first to view the weekly report')
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
            <IonTitle>Weekly Progress Report</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <form>
          <IonList lines="full" className="ion-no-margin">
            <IonItem>
              <IonLabel>Week No:</IonLabel>
              <IonInput placeholder="" name="week" ></IonInput>
              <IonLabel>Date:            From</IonLabel>
              <IonInput placeholder="" name="from" ></IonInput>
              <IonLabel>To</IonLabel>
              <IonInput placeholder="" name="to" ></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel>Department</IonLabel>
              <IonInput placeholder="" name="dep" ></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel>Name and USN of Team Members</IonLabel> 
              <IonInput placeholder="" name="details" ></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel>Name of the Guide</IonLabel>
              <IonInput placeholder="" name="guide" ></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel>Project Title</IonLabel>
              <IonInput placeholder="" name="project" ></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel>Work carried out by team during the week</IonLabel>
              <IonTextarea placeholder="" name="work" ></IonTextarea>
            </IonItem>
            <IonItem>
            <IonLabel>Individual Contribution from the Student</IonLabel>
              <IonTextarea placeholder="" name="contribution" ></IonTextarea>
            </IonItem>
            <IonItem>
            <IonLabel>Work Planned for the Following Week:</IonLabel>
              <IonTextarea placeholder="" name="future" ></IonTextarea>
            </IonItem>
            <IonItem>
            <IonLabel>Major Bottlenecks(if any)</IonLabel>
              <IonInput placeholder="" name="err" ></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel>Percentage Work Completed</IonLabel>
              <IonInput placeholder="" name="dep" ></IonInput>
            </IonItem>
            <IonButton className="ion-margin-top" expand="block" type="submit">
              Submit
            </IonButton>
          </IonList>
          </form>
        </IonContent>
      </IonPage></>
  );
};

export default WeeklyReport;