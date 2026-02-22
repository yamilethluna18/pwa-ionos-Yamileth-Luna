import type { CSSProperties } from 'react';

export const styles: { [key: string]: CSSProperties } = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ffe4ec, #ffd6e7, #fff0f5)', 
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    card: {
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(255, 182, 193, 0.4)',
        width: '90%',
        maxWidth: '500px',
        border: '1px solid #ffc1d6'
    },

    title: {
        margin: '0 0 5px 0',
        fontSize: '28px',
        color: '#ff8fab', 
        textAlign: 'center',
        fontWeight: 'bold'
    },

    subtitle: {
        textAlign: 'center',
        fontSize: '14px',
        color: '#c48aa0',
        marginBottom: '30px',
        letterSpacing: '1px'
    },

    inputGroup: {
        display: 'flex',
        gap: '12px',
        marginBottom: '25px'
    },

    input: {
        flex: 1,
        padding: '12px 15px',
        borderRadius: '10px',
        border: '1px solid #ffc1d6',
        backgroundColor: '#fff6fa',
        color: '#5a3a47',
        fontSize: '16px',
        outline: 'none'
    },

    button: {
        padding: '0 20px',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: '#ff8fab',
        color: '#ffffff',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: '0 4px 12px rgba(255, 143, 171, 0.4)'
    },

    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxHeight: '380px',
        overflowY: 'auto',
        paddingRight: '8px',
        scrollbarWidth: 'thin',
        scrollbarColor: '#ffb3c6 #ffe4ec'
    },

    taskItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        padding: '15px',
        backgroundColor: '#fff6fa',
        borderRadius: '12px',
        fontSize: '16px',
        color: '#5a3a47',
        borderLeft: '4px solid #ff8fab'
    },

    dot: {
        height: '8px',
        width: '8px',
        backgroundColor: '#ff8fab',
        borderRadius: '50%'
    },

    taskText: {
        flex: 1,
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    },

    taskCompleted: {
        textDecoration: 'line-through',
        color: '#d4a5b5'
    },

    checkBtn: {
        backgroundColor: '#fff0f5',
        border: '1px solid #ffb3c6',
        borderRadius: '6px',
        color: '#ff8fab',
        cursor: 'pointer',
        fontSize: '12px',
        padding: '3px 8px'
    },

    filterContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '15px'
    },

    filterBtn: {
        background: 'none',
        border: 'none',
        color: '#c48aa0',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: 'bold'
    },

    filterBtnActive: {
        color: '#ff8fab',
        borderBottom: '2px solid #ff8fab'
    }
};