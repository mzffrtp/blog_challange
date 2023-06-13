import { JHolderUserType } from "@/hooks/useApi/types";
import styles from "./index.module.css";

export type UsersListPropsType = {
  user: JHolderUserType;
};
export default function UsersList({ user }: UsersListPropsType) {
  return (
    <div className="m-auto my-3">
      <div className={styles.card}>
        <div className={styles.cardFront}>
          <p className={`${styles.title} text-ellipsis overflow-hidden`}>{user.name}</p>
          <p className={styles.subtitle}>{user.company.name}</p>
        </div>
        <div className={styles.cardBack}>
          <div className=" flex flex-col items-center my-2">
            <p className="underline font-bold">Email:</p>
            <p>{user.email}</p>
          </div>
          <div className=" flex flex-col items-center my-2">
            <p className="underline font-bold">Portfolio:</p>
            <p>{user.website}</p>
          </div>
          <div className=" flex flex-col items-center my-2">
            <p className="underline font-bold">Location:</p>
            <p>{user.address.city}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
