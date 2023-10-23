import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonNav,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { triangle } from 'ionicons/icons';
import Tab1 from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import WeeklyReport from './pages/WeeklyReport';
import Profile from './pages/Profile';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';




setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
        <Route path="/" exact>
            <IonNav root={() => <Tab1 />}></IonNav>
          </Route>
          <Route path="/login">
            <IonNav root={() => <Tab1 />}></IonNav>
          </Route>
          <Route path="/register">
            <IonNav root={() => <Register />}></IonNav>
          </Route>   
          <Route path="/dashboard">
            <IonNav root={() => <Dashboard />}></IonNav>
          </Route>            
          <Route path="/weeklyreport">
            <IonNav root={() => <WeeklyReport />}></IonNav>
          </Route>   
          <Route path="/profile">
            <IonNav root={() => <Profile />}></IonNav>
          </Route>             
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
