import * as React from "react";
import { UserList, UserShow, UserCreate, UserEdit } from "./users";
import {
  ContestCreate,
  ContestEdit,
  ContestList,
  ContestShow,
} from "./contests";
// import { CommentList, CommentShow, CommentCreate, CommentEdit } from "./comments";
import { Admin, Resource } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from "react-admin-firebase";
// import CommentIcon from '@material-ui/icons/Comment';
import CustomLoginPage from "./CustomLoginPage";

import firebaseConfig from "./FIREBASE_CONFIG";

const options = {
  logging: true,
  rootRef: "/",
};
const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = FirebaseAuthProvider(firebaseConfig, options);

class App extends React.Component {
  render() {
    return (
      <Admin
        loginPage={CustomLoginPage}
        dataProvider={dataProvider}
        authProvider={authProvider}
      >
        <Resource
          name="user"
          list={UserList}
          show={UserShow}
          create={UserCreate}
          edit={UserEdit}
        />
        <Resource
          name="contest"
          list={ContestList}
          show={ContestShow}
          create={ContestCreate}
          edit={ContestEdit}
        />
        <Resource
          name="report"
          list={ContestList}
          show={ContestShow}
          create={ContestCreate}
          edit={ContestEdit}
        />
        {/* <Resource
          name="comments"
          icon={CommentIcon}
          list={CommentList}
          show={CommentShow}
          create={CommentCreate}
          edit={CommentEdit}
        /> */}
      </Admin>
    );
  }
}

export default App;
