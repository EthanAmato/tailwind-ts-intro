import DisplayUsers from "@/components/DisplayUsers";
import Image from "next/image";

export type User = {
  id: number;
  name: string;
  email: string;
};
export default function Home(): React.ReactNode {

  const myUsers: User[] = [
    { email: "myemail@gmail.com", id: 123, name: "Ethan" },
    {
      email: "secondemail@secondgmail.com",
      id: 4,
      name: "Travis",
    },
  ];

  // Remember, TailWind is PRIMARILY UTILITY CLASSES - you will sometimes see HTML/JSX elements with an OVERWHELMING
  // amount of classes on them
  // Cases like this are when vscode extensions are useful:
  return (
    <main className="">
      
      <DisplayUsers
        users={myUsers}
      />
    </main>
  );
}
