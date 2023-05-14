import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from '../Login/Login.jsx'
import { Dashboard } from '../Pages/Dashboard';
import { Calendar } from '../Pages/Calendar';
import { AllFIles } from '../Pages/AllFIles';
import { ViewFiles } from '../Pages/ViewFiles';
import { Programs } from '../Pages/Programs';
// Import Framer Motion for animation on main pages
import { motion } from 'framer-motion';


export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={motion(Dashboard)} />
                <Route path="/calendar" component={motion(Calendar)} />
                <Route path="/allfiles" component={motion(AllFIles)} />
                <Route path="/viewfiles" component={motion(ViewFiles)} />
                <Route path="/programs" component={motion(Programs)} />
            </Switch>
        </Router>
    )
}
