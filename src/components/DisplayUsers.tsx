// A pretty common convention for defining typescript
// props for react components is to have
// a type at the top of the file with the name of the component
// followed by 'Props':

import { User } from "@/app/page";

type DisplayUsersProps = {
  users: User[];
};

export default function DisplayUsers({ users }: DisplayUsersProps) {
  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <h2>Find me at {user.email}</h2>
          </div>
        );
      })}
    </>
  );
}
