import React from 'react';
import styles from './button.module.css'; // Adjust the path as necessary

export default function Resume() {

  return (
    <div>
      <button 
        id='b1' 
        className={styles.pageButton} // Apply the button class
      >
        <img 
          src="resumeAdd.jpg" 
          alt="Page Icon" 
        />
      </button>
    </div>
  );
}
