
import styles from "./page.module.css";
import { auth } from "./next-auth/auth";


export default async function Home() {
  const userLogin = await auth()
  console.log(userLogin);
  return (
    <main className={'bg-dark text-danger '}>
      <h1 >Welcome to Auth.js!</h1>
      
      {userLogin.user && <h2>Welcome, {userLogin.user.name}!</h2>}
      {userLogin.user && <h2>Your Email is:, {userLogin.user.email}!</h2>}
      {userLogin.user && (
        <img width={500} src={userLogin.user.image} alt={`${userLogin.user.name}'s profile picture`} className={styles.profileImage} />
      )}
      
      {/* {userLogin.user && (
        <Image
          src={userLogin.user.image}
          alt={`${userLogin.user.name}'s profile picture`}
          width={150} // Provide a width
          height={150} // Provide a height
        />
      )} */}
     


     
    
     
    </main>
    
  );
}
