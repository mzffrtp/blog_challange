import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import MainPage from "./pages/main-page";
import UserDetails from "./pages/user-details/user-details";
import UserAlbums from "./pages/user-albums/user-albums";
import UserPosts from "./pages/user-posts/user-posts";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="users">
            <Route path=":userId">
              <Route index element={<UserDetails />} />
              <Route path="albums/:albumId" element={<UserAlbums />} />
              <Route path="posts/:postId" element={<UserPosts />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
