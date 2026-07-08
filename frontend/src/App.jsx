import { BrowserRouter, Navigate, Route, Routes, useNavigate, useParams } from "react-router";
import SignUp from "./Components/SignUpLogin/SignUp";
import LandingPage from "./Components/LandingPage/LandingPage";
import DashboardLayout from "./Components/admin/components/DashboardLayout/DashboardLayout";
import Overview from "./Components/admin/pages/Overview";
import ManageCandidates from "./Components/admin/pages/ManageCandidates";
import VoterList from "./Components/admin/pages/VoterList";
import ElectionSettings from "./Components/admin/pages/ElectionSettings";
import Results from "./Components/admin/pages/Results";
import UserLayout from "./Components/users/layoutUser";
import UserHome from "./Components/users/pages/Home";
import UserSettings from "./Components/users/pages/Settings";
import UserVotings from "./Components/users/pages/Votings"
import UserResults from "./Components/users/pages/Results"
import Login from "./Components/SignUpLogin/Login";

const ADMIN_PAGES = {
  overview: <Overview />,
  candidates: <ManageCandidates />,
  voters: <VoterList />,
  settings: <ElectionSettings />,
  results: <Results />,
};

const USER_PAGES = {
  home: <UserHome />,
  votings: <UserVotings/>,
  results: <UserResults/>,
  settings: <UserSettings />,
};

function AdminDashboardRoute() {
  const navigate = useNavigate();
  const { page = "overview" } = useParams();
  const activePage = ADMIN_PAGES[page] ? page : "overview";

  if (!ADMIN_PAGES[page]) {
    return <Navigate to="/admin/overview" replace />;
  }

  return (
    <DashboardLayout
      activePage={activePage}
      onNavigate={(nextPage) => navigate(`/admin/${nextPage}`)}
    >
      {ADMIN_PAGES[activePage]}
    </DashboardLayout>
  );
}

function UserDashboardRoute() {
  const navigate = useNavigate();
  const { page = "home" } = useParams();
  const activePage = USER_PAGES[page] ? page : "home";

  if (!USER_PAGES[page]) {
    return <Navigate to="/user/home" replace />;
  }

  return (
    <UserLayout
      activePage={activePage}
      onNavigate={(nextPage) => navigate(`/user/${nextPage}`)}
    >
      {USER_PAGES[activePage]}
    </UserLayout>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
       <Route
        path="/login"
        element={
          <main className="app">
            <Login />
          </main>
        }
      />

        <Route
        path="/signup"
        element={
          <main className="app">
            <SignUp />
          </main>
        }
        />

      <Route path="/overview" element={<Navigate to="/admin/overview" replace />} />
      <Route path="/admin" element={<Navigate to="/admin/overview" replace />} />
      <Route path="/admin/:page" element={<AdminDashboardRoute />} />
      <Route path="/user" element={<Navigate to="/user/home" replace />} />
      <Route path="/user/:page" element={<UserDashboardRoute />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
