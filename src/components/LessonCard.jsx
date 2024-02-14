import styles from "./CourseCard.module.css";
import ParagraphToList from "./ParagraphToList";

function LessonCard({ num, name, lessonBreif }) {
  const costumeStyle = {
    width: "80%",
  };
  return (
    <div className={styles.card}>
      <svg
        width="44"
        height="45"
        viewBox="0 0 44 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.989 26.6667C16.0539 26.9067 16.1432 27.1413 16.257 27.3707C16.3708 27.6009 16.4988 27.8107 16.641 28H7.48634C6.87301 28 6.36101 27.7947 5.95034 27.384C5.53879 26.9724 5.33301 26.46 5.33301 25.8467V6.15333C5.33301 5.54 5.53879 5.028 5.95034 4.61733C6.36101 4.20578 6.87301 4 7.48634 4H21.8463C22.4597 4 22.9717 4.20578 23.3823 4.61733C23.7939 5.028 23.9997 5.54 23.9997 6.15333V15.6467C23.8041 15.6191 23.5819 15.6053 23.333 15.6053C23.0841 15.6053 22.8619 15.6187 22.6663 15.6453V6.15467C22.6663 5.95022 22.581 5.76222 22.4103 5.59067C22.2388 5.41911 22.0508 5.33333 21.8463 5.33333H15.333V13.5893L12.6663 12L9.99967 13.5893V5.33333H7.48634C7.2819 5.33333 7.0939 5.41867 6.92234 5.58933C6.75167 5.76089 6.66634 5.94889 6.66634 6.15333V25.8467C6.66634 26.0511 6.75167 26.2391 6.92234 26.4107C7.0939 26.5813 7.2819 26.6667 7.48634 26.6667H15.989ZM23.333 28.9227C21.8477 28.9227 20.5872 28.4053 19.5517 27.3707C18.5161 26.336 17.9988 25.0756 17.9997 23.5893C17.9997 22.1049 18.517 20.8449 19.5517 19.8093C20.5863 18.7738 21.8468 18.256 23.333 18.256C24.8183 18.256 26.0788 18.7738 27.1143 19.8093C28.1499 20.8449 28.6672 22.1049 28.6663 23.5893C28.6663 25.0747 28.149 26.3351 27.1143 27.3707C26.0788 28.4053 24.8183 28.9227 23.333 28.9227ZM22.1797 26.1027L25.8197 23.5387L22.1797 20.9747V26.1027ZM15.989 5.33333H6.66634H22.6663H15.333H15.989Z"
          fill="#442C8F"
        />
      </svg>
      <h1>Lesson {num}</h1>
      <h3>{name}</h3>
      {lessonBreif && (
        <ParagraphToList paragraph={lessonBreif} styleP={costumeStyle} />
      )}
    </div>
  );
}

export default LessonCard;