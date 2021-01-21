// in src/contests.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
  ShowButton,
  // EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  FileField,
  FileInput,
  UrlField,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const ContestFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const ContestList = (props) => (
  <List {...props} filters={<ContestFilter />}>
    <Datagrid>
      <TextField source="title" />
      <RichTextField source="talent" />
      <TextField source="description" />
      <ReferenceField label="User email" source="userid" reference="user">
        <TextField source="email" />
      </ReferenceField>
      <UrlField source="videoUrl" />
      <TextField source="socialMedia" />
      <TextField source="followerCount" />
      <ShowButton label="" />
      {/* <EditButton label="" /> */}
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);
