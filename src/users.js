// in src/users.js
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
  // ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  FileField,
  FileInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);

export const UserList = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid>
      <TextField source="username" />
      <RichTextField source="name" />
      <TextField source="email" />
      <TextField source="account_creation_datetime" />
      <TextField source="last_login_datetime" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);

export const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      {/* <ReferenceField label="Comment" source="title" reference="comments">
        <TextField source="title" />
      </ReferenceField> */}
      <TextField source="username" />
      <RichTextField source="name" />
      <TextField source="email" />
      <TextField source="account_creation_datetime" />
      <TextField source="last_login_datetime" />
      {/* <FileField source="file.src" title="file.title" /> */}
    </SimpleShowLayout>
  </Show>
);

export const UserCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="title" />
      <RichTextInput source="body" />
      <ReferenceInput label="Comment" source="title" reference="comments">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <FileInput source="file" label="File" accept="application/pdf">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput source="id" options={{ disabled: true }} />
      <ReferenceInput source="createdate" options={{ disabled: true }} />
      <ReferenceInput source="lastupdate" options={{ disabled: true }} />
      <ReferenceInput label="Comment" source="title" reference="comments">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <TextInput source="title" />
      <RichTextInput source="body" />
      <SelectInput source="rating" choices={[
        { id: 1, name: 'Good' },
        { id: 2, name: 'Okay' },
        { id: 3, name: 'Bad' },
      ]} />
      <FileInput source="file" label="File" accept="application/pdf">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Edit>
);
