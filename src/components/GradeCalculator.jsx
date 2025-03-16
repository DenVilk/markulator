import { useState } from 'react';

function GradeCalculator() {
  const [grades, setGrades] = useState([]);
  const [input, setInput] = useState('');

  const handleNumber = (num) => {
    if (input.length < 4) {
      setInput(prev => prev + num);
    }
  };

  const handleAddGrade = () => {
    const grade = parseFloat(input);
    if (grade >= 1 && grade <= 10 && !isNaN(grade)) {
      setGrades([...grades, grade]);
      setInput('');
    }
  };

  const handleDeleteInput = () => {
    setInput(prev => prev.slice(0, -1));
  };

  const handleClearAll = () => {
    setGrades([]);
    setInput('');
  };

  const deleteGrade = (index) => {
    setGrades(prev => prev.filter((_, i) => i !== index));
  };

  const calculateAverage = () => {
    if (grades.length === 0) return '0.00';
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return (sum / grades.length).toFixed(2);
  };

    return (
      <div style={styles.calculator}>
        <div style={styles.display}>
          <div style={styles.inputDisplay}>{input || '0'}</div>
          <div style={styles.resultDisplay}>Среднее: {calculateAverage()}</div>
        </div>
  
        {/* Блок истории */}
        <div style={styles.historySection}>
          <div style={styles.historyHeader}>
            <span>История оценок</span>
            <button 
              onClick={handleClearAll}
              style={styles.clearHistoryButton}
            >
              Очистить всё
            </button>
          </div>
          <div style={styles.historyList}>
            {grades.map((grade, index) => (
              <div key={index} style={styles.historyItem}>
                <span>#{index + 1}: {grade}</span>
                <button 
                  onClick={() => deleteGrade(index)}
                  style={styles.deleteGradeButton}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
  
        {/* Блок кнопок */}
        <div style={styles.buttonsPanel}>
          <div style={styles.numberGrid}>
            <button onClick={() => handleNumber('7')} style={styles.numberButton}>7</button>
            <button onClick={() => handleNumber('8')} style={styles.numberButton}>8</button>
            <button onClick={() => handleNumber('9')} style={styles.numberButton}>9</button>
            
            <button onClick={() => handleNumber('4')} style={styles.numberButton}>4</button>
            <button onClick={() => handleNumber('5')} style={styles.numberButton}>5</button>
            <button onClick={() => handleNumber('6')} style={styles.numberButton}>6</button>
            
            <button onClick={() => handleNumber('1')} style={styles.numberButton}>1</button>
            <button onClick={() => handleNumber('2')} style={styles.numberButton}>2</button>
            <button onClick={() => handleNumber('3')} style={styles.numberButton}>3</button>
            
            <button onClick={() => handleNumber('10')} style={styles.numberButton}>10</button>
            <button onClick={handleClearAll} style={styles.controlButton}>AC</button>
            <button onClick={handleDeleteInput} style={styles.controlButton}>⌫</button>
          </div>
          
          <button 
            style={styles.actionButton}
            onClick={handleAddGrade}
            disabled={!input}
          >
            Добавить
          </button>
        </div>
      </div>
    );
  }
  
  // Стили остаются как в предыдущей версии с историей
  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1a1a1a',
    },
    calculator: {
      width: '100%',
      maxWidth: '800px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#2d2d2d',
      borderRadius: '0',
      padding: '20px',
      boxShadow: '0 0 40px rgba(0,0,0,0.3)',
    },
    display: {
      backgroundColor: '#1a1a1a',
      borderRadius: '10px',
      padding: '25px',
      margin: '20px 0',
    },
    inputDisplay: {
      fontSize: '3.5rem',
      color: '#fff',
      textAlign: 'right',
      minHeight: '60px',
    },
    resultDisplay: {
      fontSize: '1.5rem',
      color: '#888',
      textAlign: 'right',
      marginTop: '15px',
    },
    historySection: {
      flexGrow: 1,
      backgroundColor: '#1a1a1a',
      borderRadius: '10px',
      margin: '10px 0',
      padding: '20px',
      overflow: 'hidden',
    },
    historyHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '15px',
    },
    historyTitle: {
      color: '#fff',
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    clearHistoryButton: {
      backgroundColor: '#ff4444',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '8px 15px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      transition: '0.2s',
      ':hover': {
        backgroundColor: '#cc0000',
      },
    },
    historyList: {
      height: 'calc(100% - 40px)',
      overflowY: 'auto',
    },
    historyItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px',
      margin: '8px 0',
      backgroundColor: '#2d2d2d',
      borderRadius: '8px',
      fontSize: '1.1rem',
      color: '#fff',
    },
    deleteGradeButton: {
      backgroundColor: '#ff4444',
      border: 'none',
      color: 'white',
      borderRadius: '50%',
      width: '28px',
      height: '28px',
      cursor: 'pointer',
      fontSize: '16px',
      lineHeight: '28px',
      padding: 0,
      transition: '0.2s',
      ':hover': {
        backgroundColor: '#cc0000',
      },
    },
    buttonsPanel: {
      minHeight: '300px',
    },
    numberGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '15px',
      marginBottom: '15px',
    },
    numberButton: {
      fontSize: '1.5rem',
      padding: '20px',
      backgroundColor: '#4a4a4a',
      borderRadius: '10px',
      // ... остальные стили кнопок
    },
    controlButton: {
      fontSize: '1.3rem',
      padding: '20px',
      // ... остальные стили
    },
    actionButton: {
      fontSize: '1.3rem',
      padding: '20px',
      // ... остальные стили
    },
  };
  
  export default GradeCalculator;