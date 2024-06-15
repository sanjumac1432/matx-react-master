import Loadable from "app/components/Loadable";
import { lazy } from "react";

const LeadData = Loadable(lazy(() => import("../leads/leads")));

const leadsRoutes = [{ path: "/leads", element: <LeadData /> }];

export default leadsRoutes;
