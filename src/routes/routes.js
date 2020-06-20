import Lol from "../components/Lol"
import Login from "../components/Login";
import Registration from "../components/Registration";
import Hudai from "../components/Hudai";


export const authRoute = [
  { path: "/login", exact: true, component: Login },
  { path: "/registration", exact:true, component: Registration },
];
export const publicRoute = [{ path: "/", exact:true, component: Lol}];

export const privateRoute = [{ path: "/hudai", exact:true, component: Hudai }];
