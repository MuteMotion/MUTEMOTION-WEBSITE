import styles from "./Profile.module.css";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { SetProfilePic } from "../components/SetProfilePic";
import { Pass } from "../components/Pass";
import { NamesForm } from "../components/NamesForm";
import { PersonalInfon, Password, Notification } from "./PersonalInfon";
import { useProfile } from "../contexts/ProfileContext";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Profile() {
  const {
    fullName,
    email,
    profilePicture,
    setFullName,
    setEmail,
    setProfilePicture,
    notificationMessage,
  } = useProfile();

  const btnStyle = {
    backgroundColor: "transparent",
    color: "#442c8f",
  };

  // Function to handle sharing profile link
  const handleShareProfile = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => toast.success("Profile link copied to clipboard"))
      .catch((error) => console.error("Failed to copy profile link: ", error));
  };
  return (
    <>
      <div className={styles.profile}>
        <PageNav />
        <main>
          <div>
            <Toaster
              toastOptions={{
                className: "toast",
                success: {
                  iconTheme: {
                    primary: "#442c8f",
                    secondary: "white",
                  },
                },
              }}
            />
          </div>
          <section className={styles.rectangle}>
            <div className={styles.mainInfo}>
              <img
                src={profilePicture}
                alt="Your name"
                className={styles.img}
              ></img>
              <h2>{fullName}</h2>
              <Button type="continue" onClick={handleShareProfile}>
                Share Profile
              </Button>
              <div className={styles.rectangle2}>
                <PersonalInfon />
                <Password />
                <Notification />
              </div>
            </div>
          </section>
        </main>
        <section className={styles.container}>
          <PersonalInfon />
          <div className={styles.rectangleComponent}>
            <SetProfilePic
              selectedImage={profilePicture}
              setSelectedImage={setProfilePicture}
            />
            <NamesForm
              selectedImage={profilePicture}
              mainImage={profilePicture}
              setSelectedImage={setProfilePicture}
              setMainImage={setProfilePicture}
              setFullName={setFullName}
              FullName={fullName}
            />
          </div>
        </section>
        <section className={styles.container}>
          <Password />
          <Pass
            email={email}
            setEmail={setEmail}
            oldPass={""}
            setOldPass={() => {}}
          />
        </section>
        <section className={styles.container}>
          <Notification />
          <div className={styles.rectangleComponent}>
            <div className={styles.notification}>
              {notificationMessage.length > 0 ? (
                notificationMessage.map((notification, index) => (
                  <div key={index}>
                    <p>
                      {index + 1}. {notification.message}
                    </p>
                    <hr />
                  </div>
                ))
              ) : (
                <p>No notifications to show</p>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
